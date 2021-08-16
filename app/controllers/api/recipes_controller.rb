class Api::RecipesController < ApplicationController
  before_action :set_plan
  before_action :set_recipe, only: [:show, :update, :destroy]

  def index
    render json: @plan.recipes
  end

  def show
    render json: @recipe
  end

  def create
    @recipe = @plan.recipes.new(recipe_params)
    if @recipe.save
      render json: @recipe
    else
      render json: { errors: @recipe.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: { errors: @recipe.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe.destroy
    render json: { message: 'Recipe Deleted' }
  end

  private
    def set_plan
      @plan = Plan.find(params[:plan_id])
    end

    def set_recipe
      @recipe = @plan.recipes.find(params[:id])
    end

    def recipe_params
      params.require(:recipe).permit(:title, :description, :serving)
    end
end