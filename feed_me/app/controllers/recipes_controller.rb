class RecipesController < ActionController::API
    def index
        @user = User.find(params[:user_id])
        @recipes = @user.recipes
        render json: @recipes, include: :user, status: :ok
    end
end