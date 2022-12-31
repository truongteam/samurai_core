class CreateSubUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :sub_users, id: :uuid do |t|
      t.string :email
      t.uuid :account_id
      t.uuid :sub_account_id

      t.timestamps
    end
  end
end
