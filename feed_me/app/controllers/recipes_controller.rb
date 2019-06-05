class RecipesController < ActionController::API
    def index
        @recipes = Recipe.all
        render json: @recipes, status: :ok
    end

    def show
        @recipe = Recipe.find(params[:id])
        render json: @recipe, status: :ok
    end

    def create 
        @recipe = Recipe.new(recipe_params)

        if @recipe.save
            redirect_to recipe_path(@recipe)
        else
            render :new
        end
    end

    def update
        @recipe = Recipe.find(params[:id])
    
        if @recipe.update(recipe_params)
          render json: @recipe, status: :ok
        else
          render json: { errors: @recipe.errors }, status: :unprocessable_entity
        end
      end

    def destroy
        @recipe = Recipe.find(params[:id])
        @recipe.destroy
    end

    private 

    def recipe_params
        params.require(:recipe).permit(:name, :meal_image, :cuisine, :region, :cook_time, :ingredients, :measurements, :servings, :instructions, :user_id)
    end
end