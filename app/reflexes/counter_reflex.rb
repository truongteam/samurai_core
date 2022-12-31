class CounterReflex < ApplicationReflex
  delegate :current_user, to: "Samurai::ApplicationCable::Connection"

  def increment(step = 1)
    session[:count] = session[:count].to_i + step
  end
end
