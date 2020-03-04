Rails.application.routes.draw do
  resources :bookings
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :dashboard
  root 'dashboard#index'
end
