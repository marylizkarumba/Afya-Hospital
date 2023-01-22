class AddingAppointmentsColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :appointment_time, :string
    add_column :appointments, :appointment_date, :string
  end
end
