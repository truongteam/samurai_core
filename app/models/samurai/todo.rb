module Samurai
  class Todo < ShardRecord
    self.table_name = "todos"
  end
end
