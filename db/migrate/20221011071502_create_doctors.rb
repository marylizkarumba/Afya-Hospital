class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :name
      t.integer :phone_number
      t.string :address
      t.string :department
      t.string :email
      t.string :image_url

      t.timestamps
    end
  end
end
