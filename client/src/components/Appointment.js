import React, {useEffect, useState} from 'react'
import UpdateAppointment from './UpdateAppointment'

function Appointment() {
  const [appoints, setAppoints] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    fetch("/appointments")
    .then(res => res.json())
    .then(data => setAppoints(data))
  }, [])

  function handleDelete(appoint){
    fetch(`/appointments/${appoint.id}`,{
      method: 'DELETE'
    })
  }

  // function handleUpdate(){
  //   setShow(!show)
  //   console.log("update")
  // }

  return (
    <div>
      {appoints.map((appoint) =>{
        return(
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div key={appoint.id}>
              <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Great You've Booked with Us:</div>
                <p>You booked this date: {appoint.appointment_date}</p>
                <p>You booked this time: {appoint.appointment_time}</p>
              </div>
              <div class="px-6 pt-4 pb-2">
                { show ?
                  <UpdateAppointment appointment={appoint} /> : null
                }
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
                  UPDATE
                </button>
                <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleDelete(appoint)}>
                  DELETE
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Appointment
