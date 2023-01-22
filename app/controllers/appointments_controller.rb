class AppointmentsController < ApplicationController
  skip_before_action :authorized

  def index
    render json: Appointment.all
  end

  def show
    appointment = find_appointment
    render json: appointment
  end

  def create
    appointment = Appointment.create!(appointment_params)
    render json: appointment
  end

  def destroy
    appointment = find_appointment
    appointment.destroy
    head :no_content
  end

  private

  def find_appointment
    Appointment.find(params[:id])
  end

  def appointment_params
    params.permit(:appointment_date, :appointment_time, :user_id)
  end

end
