class ArtsController < ApplicationController
  before_action :require_user, only: [:show, :edit, :update, :destroy]
  before_action :require_editor, only: [:show, :edit]
  before_action :require_admin, only: [:destroy]

  def show
    @art = Art.find(params[:id])
  end

  def edit
    @art = Art.find(params[:id])
  end

  def update
    @art = Art.find(params[:id])
      if @art.update(art_params)
        # redirect_to @art
        render json: @art
      else
        # render 'edit'
      end
  end

  def destroy
    @art = Art.find(params[:id])
    @art.destroy
    # redirect_to root_url
    render json: @art, "was deleted"
  end

  private
    def art_params
      params.require(:art).permit(:caption, :image, :collection)
    end

end

