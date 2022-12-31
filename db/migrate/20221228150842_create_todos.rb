class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos, id: :uuid do |t|
      t.string :title
      t.string :account_id
      t.string :user_id
      t.uuid :shard_id

      t.timestamps
    end
  end
end
