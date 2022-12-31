class CreateSubAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :sub_accounts, id: :uuid do |t|
      t.string :name
      t.uuid :account_id

      t.timestamps
    end
  end
end
