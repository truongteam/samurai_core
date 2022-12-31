module Samurai
  class CreateUser
    class ParamsContract < Samurai::ApplicationContract
      params do
        required(:email).filled(:string)
        required(:password).value(:string)
        required(:password_confirmation).value(:string)
      end

      rule(:email) do
        unless /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.match?(value)
          key.failure("has invalid format")
        end
      end

      rule(:password, :password_confirmation) do
        key.failure("password confirmation must be same as password") if values[:password] != values[:password_confirmation]
      end
    end
  end
end
