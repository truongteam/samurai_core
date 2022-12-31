module Samurai
  class ShardRecord < ActiveRecord::Base
    self.abstract_class = true
    establish_connection :primary if Rails.env.test?

    SHARDS = connects_to shards: {
      shard_1: { writing: :shard_1 },
      shard_2: { writing: :shard_2 },
    }
  end
end
