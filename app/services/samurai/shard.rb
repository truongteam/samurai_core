module Samurai
  module Shard
    def self.physical_shard_key(uuid)
      shard_number = uuid.tr("-", "").to_i(16) % ShardRecord::SHARDS.count
      "shard_#{shard_number + 1}".to_sym
    end

    def self.use(shard)
      ShardRecord.connected_to(shard: shard, role: :writing) do
        yield
      end
    end

    def self.for(shard_id)
      use(physical_shard_key(shard_id)) do
        yield
      end
    end

    def self.all
      results = []
      threads = []

      ShardRecord::SHARDS.each do |shard_connection|
        shard_name = shard_connection.db_config.name.to_sym

        threads << Thread.new do
          results << use(shard_name) do
            yield
          end
        end
      end

      threads.each(&:join)
      results.flatten
    end
  end
end
