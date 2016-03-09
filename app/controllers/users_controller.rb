class UsersController < ApplicationController

  def new
    @user = User.new
    # render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      # redirect_to '/'
      # format.json { render json: @user, status: :created }
      render json: @user
    else
      # redirect_to '/signup'
      format.json { render json: @user.errors, status: :unprocessable_entity }
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_digest)
  end

end

