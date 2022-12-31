module Samurai
  class SubAccount < ShardRecord
    self.table_name = :sub_accounts
    has_many :sub_users, class_name: "Samurai::SubUser", inverse_of: :sub_account
  end
end
