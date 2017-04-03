class RobotsController < ApplicationController
  def index
    @robots = Robot.all
    render json: @robots
  end

  def show
    @robot = Robot.find_by(id: params[:id])
    # or .find_by_id(params[:id])
    # e.g. .find_by(name: params[:name])
    render json: @robot
  end

  def create
    new_robot = Robot.new(permitted_params)
    if new_robot.save
# saves and tests if save is successful
      render json: new_robot
    else render status: 422
    end
  end

  def update
    found_robot = Robot.find_by_id(params[:id])
    saved = found_robot.update(permitted_params)
    if saved
      render status: 204
    else
      render status: 422
    end
  end

  def destroy
    found_robot = Robot.find_by_id(params[:id])
    if found_robot.destroy!
      render status: 204
    else
      render status: 422
  end
end

# private only for use inside Robot class
  private

# limits what a user can send when creating or updating a robot
  def permitted_params
    params.require(:robot).permit(:name, :avatar, :skill, :serial)
  end


end
