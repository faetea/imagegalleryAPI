class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    #@user = User.new(user_params)
    @user = User.new(params.permit(:first_name, :last_name, :email, :password, :password_confirmation))
    if @user.save
      session[:user_id] = @user.id
      # redirect_to '/'
      puts "Signup: Created new User and saved"
      render json: @user, only: [:first_name, :email]
    else
      # redirect_to '/signup'
      puts "Signup: Unable to saved new User"
      render json: @user.errors
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

end

