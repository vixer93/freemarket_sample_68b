Rails.application.routes.draw do
  root to: "home#index"

  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  devise_scope :user do
    get  'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
  end

  resources :users do
    member do
      get 'exhibiting'
      get 'buy'
      get 'bought'
      get 'sold'
      get 'transaction'
    end
  end
  resources :cards, only: [:new, :create, :index, :destroy]
  resources :products do
    resources :contracts, only: [:new, :create]
  end
  resources :cards, only: [:index, :new, :create, :delete]
end