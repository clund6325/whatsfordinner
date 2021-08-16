class Api::IngredsController < ApplicationController
  before_action :set_recipe
  before_action :set_ingred, only: [:show, :update, :destroy]

  def index
    render json: @recipe.ingreds
  end

  def show
    render json: @ingred
  end

  def create
    @ingred = @recipe.ingreds.new(ingred_params)
    if @ingred.save
      render json: @ingred
    else
      render json: { errors: @ingred.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @ingred.update(ingred_params)
      render json: @ingred
    else
      render json: { errors: @ingred.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @ingred.destroy
    render json: { message: "Ingredient Deleted" }
  end

  private
    def set_recipe
      @recipe = Recipe.find(params[:recipe_id])
    end

    def set_ingred
      @ingred = @recipe.ingreds.find(params[:id])
    end

    def ingred_params
      params.require(:ingred).permit(:food, :measurement, :calories)
    end
end