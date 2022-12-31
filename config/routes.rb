Samurai::Core::Engine.routes.draw do
  root to: "dashboard#index"
  get "/dummy", to: "dummy#index"
end
