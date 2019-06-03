class RecipesController < ActionController::API
    def index
        @recipes = Recipe.all
        render json: @recipes, status: :ok
    end
end