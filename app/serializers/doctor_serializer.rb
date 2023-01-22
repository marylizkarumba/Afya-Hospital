class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :department, :email, :image_url
end
