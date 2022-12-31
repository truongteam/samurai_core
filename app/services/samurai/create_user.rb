module Samurai
  class CreateUser < ApplicationService
    UserCreated = Class.new(RubyEventStore::Event)

    def call(input, metadata = {})
      params = validate!(input)
      puts "INput is #{params}"
      ApplicationRecord.transaction do
        acc = Account.new(
          name: params[:email],
          shard_id: SecureRandom.uuid,
        )
        acc.save!
        u = User.new(
          params.merge(
            account_id: acc.id,
            shard_id: acc.shard_id,
          )
        )
        u.save!
        result = {
          account: acc,
          user: u,
        }
        Samurai::Shard.for(u.shard_id) do
          subAcc = Samurai::SubAccount.new(
            name: acc.name,
            account_id: acc.id,
          )
          subAcc.save!
          subUser = Samurai::SubUser.new(
            email: u.email,
            account_id: subAcc.account_id,
            sub_account_id: subAcc.id,
          )
          subUser.id = u.id
          subUser.save!
          result.merge!({
            sub_account: subAcc,
            sub_user: subUser,
          })
        end

        event = UserCreated.new(
          data: result,
        )
      rescue => e
        failure e
      else
        publish_event event, metadata.merge(params: params)
        success result
      end
    end

    private

    def validate!(input)
      contract = Samurai::CreateUser::ParamsContract.new
      params = contract.call(input).to_h
      if params[:errors]
        return OpenStruct.new(
                 { success?: false, error: params[:errors] }
               )
      else
        return params
      end
    end
  end
end
