Rails.application.routes.draw do
  scope '/users/:user_id' do
    resources :recipes
  end  
end
