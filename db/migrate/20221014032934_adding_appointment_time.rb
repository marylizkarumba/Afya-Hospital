class AddingAppointmentTime < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :appointment_time, :datetime
  end
end
