class Api::HarvestTypesController < ApplicationController

  def index
    @hts = HarvestType.all
    render json: @hts
  end

  def show
    @ht= HarvestType.find([params[:id]])
    if @ht
      render :show
    else
      render json: @ht.errors.full_messages, status: 404
    end
  end
  
  private

    def harvest_types_params
      params.require(:harvest_types).permit(:classification, :harvest_name, :seasonal_status, :image_url, :description)
    end


end
