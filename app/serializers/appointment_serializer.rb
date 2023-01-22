class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :appointment_date, :appointment_time
end
