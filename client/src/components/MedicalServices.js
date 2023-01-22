import React from 'react'

function MedicalServices() {
  return (
    <div className='container'>
    <div className='row'>
<div className="medical-services-text">
      <h1>Our Medical Services</h1>
      <em>We are dedicated to serve you <br />best medical services</em>
    </div>
    </div>
    <div className='service-cards'>
    <div class="glassBox">
      <div class="glassBox__imgBox">
        <img src="https://cdn.pixabay.com/photo/2017/10/04/09/56/chemist-2815640__340.jpg" alt="" />
        <h3 class="glassBox__title">Well equipped Lab</h3>
      </div>
    </div>
    <div class="glassBox">
      <div class="glassBox__imgBox">
        <img src="https://cdn.pixabay.com/photo/2014/11/27/18/37/doctor-on-call-548023__340.jpg" alt="" />
        <h3 class="glassBox__title">Emergency Ambulance</h3>
      </div>
    </div>
    <div class="glassBox">
      <div class="glassBox__imgBox">
        <img src="https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <h3 class="glassBox__title">Online Service</h3>
      </div>
    </div>
    <div class="glassBox">
      <div class="glassBox__imgBox">
        <img src="https://images.pexels.com/photos/4173250/pexels-photo-4173250.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <h3 class="glassBox__title">Call service</h3>
      </div>
    </div>
    </div>
    </div>
  )
}

export default MedicalServices
