Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :plans do
      resources :recipes
    end
    resources :recipes do
      resources :ingreds
    end
  end
end
