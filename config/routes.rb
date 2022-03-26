Rails.application.routes.draw do
  resources :walk_pieces
  resources :pieces
  resources :walks
  resources :museums
  resources :sessions
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get "/specificWalk", to: "walks#show"
  get "/allWalks", to: "walks#index"
  post "/newWalk", to: "walks#create"
  patch "/updateWalk", to: "walks#update"
  delete "/deleteWalk", to: "walks#destroy"

  get "/allPieces", to: "pieces#index"
  post "/newPiece", to: "pieces#create"
  delete "/deletePiece", to: "pieces#destroy"

  get "/allWalkPieces", to: "walk_pieces#index"
  post "/newWalkPiece", to: "walk_pieces#create"
  delete "/deleteWalkPiece", to: "walk_pieces#destroy"

  get "/allUsers", to: "users#index"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  patch "/updateUser", to: "users#update"
  delete "/deleteUser", to: "users#destroy"


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Defines the root path route ("/")
  # root "articles#index"
end
