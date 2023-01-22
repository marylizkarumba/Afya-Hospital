import React from 'react'
import {useEffect, useState} from 'react'

function Service() {
  const [doctors, setDoctors] = useState([])
  useEffect(()=>{
    fetch('/doctors')
    .then((res)=>{
        return res.json()
      })
      .then((data)=>setDoctors(data))
  }, [])

  return (
    <div>
        <div class="grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctors.map((doctor)=>{
            return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={doctor.image_url} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{doctor.name}</div>
            <p class="text-gray-700 text-base">{doctor.department}</p>
            </div>
        </div>)
        })}
        </div>
    </div>
  )
}

export default Service;
