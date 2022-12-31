# config/initializers/sql_query.rb
require "sql_query"

class MyQuery < SqlQuery
  def path
    root = Samurai::Core::Engine.root.to_s
    tmp_path = "#{root}/app/sql_queries"
    tmp_path += "/#{@sql_filename}.{sql.erb,erb.sql}"
    tmp_path
  end
end
