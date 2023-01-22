import React from 'react'
import MedicalServices from './MedicalServices'
// import NavBar from './NavBar'
import Testimonials from './Testimonials'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <div class="container containerr">
            <div class="row row1">
                <div class="col col1">
                    <div class="col1-1">
                      <p><span>We care</span></p>
                      <p>about your health</p>
                      <em>Good health is the state of mental, physical and social well being and it does not just mean absence of diseases. </em>
                    </div>
                    <Link to="/appointments">
                      <div class="more">
                        <a href=" " id="connect">Book an appointment <span>&#x27F6;</span></a>
                      </div>
                    </Link>
                </div>
                <div class="col col2">
                    <img src="https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=400" alt=' ' />
                    <div className='search-doctors'>
                      <div className='search-icon'>
                        <a href=' '><i class="fa-solid fa-magnifying-glass"></i></a>
                      </div>
                      <div className='search-text'>
                        <p>Well Qualified doctors</p>
                        <em>Treat with care</em>
                      </div>
                    </div>
                    <div className='book-doctors'>
                      <div className='book-icon'>
                        <a href=' '><i class="fa-sharp fa-solid fa-clipboard"></i></a>
                      </div>
                      <div className='book-text'>
                        <p>Book an appointment</p>
                        <em>Online appointment</em>
                      </div>
                    </div>
                    <div className='call-doctors'>
                      <div className='call-text'>
                        <p>Contact no</p>
                        <em>+254758982500</em>
                      </div>
                      <div className='call-icon'>
                        <a href=' '><i class="fa-solid fa-phone"></i></a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    <MedicalServices />
    </div>
  )
}

export default Home
