class Api::PlansController < ApplicationController
  before_action :set_plan, only: [:show, :update, :destroy]

  def index
    render json: current_user.plans
  end

  def show
    render json: @plan
  end

  def create
    @plan = current_user.plans.new(plan_params)
    if @plan.save
      render json: @plan
    else
      render json: { errors: @plan.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @plan.update(plan_params)
      render json: @plan
    else
      render json: { errors: @plan.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @plan.destroy
    render json: { message: "Meal Plan Deleted" }
  end

  private
    def plan_params
      params.require(:plan).permit(:week_day, :meal, :theme)
    end

    def set_plan
      @plan = current_user.plans.find(params[:id])
    end
end
