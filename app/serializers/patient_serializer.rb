class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :address, :email
end
