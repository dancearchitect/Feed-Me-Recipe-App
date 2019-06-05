Rails.application.routes.draw do
    resources :recipes

    scope '/recipe/:id' do
        resources :recipes
    end
end
