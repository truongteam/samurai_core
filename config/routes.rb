Samurai::Core::Engine.routes.draw do
    devise_for :users, class_name: "Samurai::User", module: :devise
    root to: "dashboard#index"
    get '/dummy', to:  "dummy#index"
    get '/contact', to:  "public#contact"
end
