import React, {useState} from 'react'

function UpdateAppointment({appointment}) {
    const [time, setTime] = useState(appointment.appointment_time)
    const [date, setDate] = useState(appointment.appointment_date)

    function handleUpdate(id, e){
        // fetch(`/appointments/${id}`)
        e.preventDefault()
        console.log(id)
    }

  return (
    <div>
        <form onSubmit={()=>handleUpdate(appointment.id)}>
           <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
           />
           <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
           />
           <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateAppointment
