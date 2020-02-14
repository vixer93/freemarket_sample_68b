Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: 'users/registrations'}
  devise_scope :user do
    get "users/address", to: "devise/registrations#new_address"
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "tests#index"
end
