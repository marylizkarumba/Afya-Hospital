class ServicesController < ApplicationController
  def index
    render json: Service.all
  end

  def show
    render json: Service.find(params[:id])
  end
end
