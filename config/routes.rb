Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users
    resources :harvests
    resources :subscribers, only: [:create]
    resource :session, only: [:new, :create, :destroy]
  end

  root to: 'root#root'
end
