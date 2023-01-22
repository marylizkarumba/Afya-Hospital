import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function NewAppointment({user}) {
    const [appointment_dates, setAppointmentDates] = useState('')
    const [appointment_times, setAppointmentTimes] = useState('')
    const [user_id] = useState(user.id)
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        fetch('/appointments', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
              {
                appointment_date: appointment_dates,
                appointment_time: appointment_times,
                user_id,
              }
            ),
        })
        .then((r) => r.json())
        // .then(data => console.log(data))
        navigate('/appointments')
    }
// console.log(appointment_dates)
// console.log(appointment_times)
// console.log(formData)

  return (
    <div>
     <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px] bg-white">
    <form onSubmit={handleSubmit}>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="date"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={appointment_dates}
              onChange={(e) => setAppointmentDates(e.target.value)}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="time"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              value={appointment_times}
              id="time"
              onChange={(e) => setAppointmentTimes(e.target.value)}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div>
        <button type="submit"
          class="hover:shadow-form w-full rounded-md py-3 px-8 text-center text-base font-semibold outline-none appoint-button"
        >
          Book Appointment
        </button>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default NewAppointment
