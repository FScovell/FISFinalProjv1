Rails.application.routes.draw do
  resources :pieces
  resources :walks
  resources :museums
  resources :sessions
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post "/newPiece", to: "pieces#create"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Defines the root path route ("/")
  # root "articles#index"
end
