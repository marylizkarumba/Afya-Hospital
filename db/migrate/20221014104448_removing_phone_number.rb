class RemovingPhoneNumber < ActiveRecord::Migration[6.1]
  def change
    remove_column :doctors, :phone_number, :integer
  end
end
