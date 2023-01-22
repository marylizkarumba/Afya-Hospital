class Removingerrorcolumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :appointment_date, :string
    remove_column :appointments, :appointment_time, :string
  end
end
