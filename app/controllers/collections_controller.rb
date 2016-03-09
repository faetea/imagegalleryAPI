class CollectionsController < ApplicationController
  before_action :require_user, only: [:index, :show]

  def index
    @collections = Collection.all
  end

  def show
    @collection = Collection.find(params[:id])
    @arts = @collection.arts
  end

end
