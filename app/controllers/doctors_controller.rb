class DoctorsController < ApplicationController
  skip_before_action :authorized

  def index
    render json: Doctor.all
  end

  def show
    doctor = find_doctor
    render json: doctor
  end

  private

  def find_doctor
    Doctor.find(params[:id])
  end

end
