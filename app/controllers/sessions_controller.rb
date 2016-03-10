class SessionsController < ApplicationController

  # because logging in is done throught post 'login' => 'sessions#create', the def new route just lets me know what fields I need to fill to login in
  def new
    render json: @user
  end

  def create
    @user = User.find_by_email(params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      # redirect_to '/'
      render json: @user.id
    else
      # redirect_to 'login'
    end
  end

  def destroy
    session[:user_id] = nil
    # redirect_to '/'
  end

end
