class EnableUuids < ActiveRecord::Migration[7.0]
  def change
    enable_extension "pgcrypto"
    enable_extension "pg_stat_statements"
    enable_extension "pg_buffercache"
    enable_extension "sslinfo"
  end
end
