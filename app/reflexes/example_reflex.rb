class ExampleReflex < ApplicationReflex
  def words
    @words = element[:value]
  end
end
