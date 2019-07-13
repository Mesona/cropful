class Api::HarvestsController < ApplicationController

  def index
    @harvests = Harvest.all
    render json: @harvests
  end

  def show
    @harvest = Harvest.find([params[:id]])
    if @harvest
      render :show
    else
      render json: @harvest.errors.full_messages, status: 404
    end
  end

  private
    def harvest_params
      params.require(:harvest).permit(:harvest_type, :ripe, :lat, :lng)
    end


end
