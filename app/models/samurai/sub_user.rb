module Samurai
  class SubUser < ShardRecord
    self.table_name = :sub_users
    belongs_to :sub_account, class_name: "Samurai::SubAccount", inverse_of: :sub_users
  end
end
