import React from 'react'
// import NavBar from './NavBar'
import {useEffect, useState} from 'react'

function Service() {
  const [services, setServices] = useState([])
  useEffect(()=>{
    fetch('/services')
    .then((res)=>{
        return res.json()
      })
      .then((data)=>setServices(data))
  }, [])


  return (
    <>
    <div class="grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {services.map((service)=>{
      return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={service.image_url} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{service.name}</div>
      <p class="text-gray-700 text-base">
        {service.description}
      </p>
    </div>
  </div>)
    })}
  </div>
  </>
  )
}

export default Service;
