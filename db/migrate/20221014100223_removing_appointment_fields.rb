class RemovingAppointmentFields < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :doctor_id, :integer
    remove_column :appointments, :service_id ,:integer
  end
end
