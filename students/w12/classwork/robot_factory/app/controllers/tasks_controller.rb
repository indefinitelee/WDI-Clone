class TasksController < ApplicationController
# because each task belongs to a robot these are written differently than robot controller
  def index
# create var found_robot by the id parameter
    found_robot = Robot.find_by_id(params[:robot_id])
# show the tasks associated with that robot in json format
     render json: found_robot.tasks
  end

  def show
# create var found_robot by the id parameter
    found_robot = Robot.find_by_id(params[:robot_id])
# create var task assigned to value of found_robot.tasks found by it
    task = found_robot.tasks.find_by_id(params[:id])
    render json: task
  end

  def create
    found_robot = Robot.find_by_id(params[:robot_id])
# variable new task is assigned the value of class Task with the .new method and takes permitted params
    new_task = Task.new(permitted_params)
# the robot found by id has it's tasks accessed with .tasks, << pushes a new item into the .tasks array - could possibly also be a .push
    found_robot.tasks << new_task
# new_record returns false if object has not been saved yet
    if !(new_task.new_record?)
# new_record is a built in method
      render json: new_task
    else
      render status: 422
    end

  end

  def update
    found_robot = Robot.find_by_id(params[:robot_id])
# task is assigned the value of the tasks owned by the robot found by params
    task = found_robot.tasks.find_by_id(params[:id])
# saved is assigned the value of a task with permitted params
    saved = task.update(permitted_params)

    if saved
      render status: 204
    else
      render status: 422
    end

  end

  def destroy
    found_robot = Robot.find_by_id(params[:robot_id])
    task = found_robot.tasks.find_by_id(params[:id])
    deleted = task.destroy

    if deleted
      render status: 204
    else
      render status: 422
    end

  end

private

  def permitted_params
    params.require(:task).permit(:name, :description, :completed)
# don't need robot_id since it's handled by route
  end

end
