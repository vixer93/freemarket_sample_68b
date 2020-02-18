Rails.application.routes.draw do
  root to: "home#index"

  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  devise_scope :user do
    get  'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
  end
  root "tests#index"
  resources :users, only: [:show]
end

