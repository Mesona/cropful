Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:new, :create, :destroy]
    resources :users
  end

  root to: 'root#root'
end
