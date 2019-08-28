class Api::SubscribersController < ApplicationController

  def index
    @subscribers = Subscriber.all
    # render json: @subscribers
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)

    if @subscriber.save
    else
      render json: @subscriber.errors.full_messages, status: 401
    end
  end

  private
  def subscriber_params
    params.require(:subscriber).permit(:email)
  end
end
