import React from 'react'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import client1 from "../assets/Client1.jpg"
import client2 from "../assets/Client2.jpg"
import client3 from "../assets/Client3.jpg"

export const ClientTestimonials = () => {
  return (
    <div className='Outter-Testimonials-Container'>
        <h2>Client Testimonials</h2>
        <div className='Inner-Testimonials-Container'>
        <div className='Testimonials-Bottom'>
            <BiSolidQuoteAltLeft size={100}/>
            <p>I rented the Rolls Royce Ghost for my 10 year highschool reunion and let me just say it was money well spent</p>
            <div className='Client-Photo'>
          <img src={client1} />
          <h4>Adam Jones</h4>
          </div>
        </div>
        <div className='Testimonials-Top'>
        <BiSolidQuoteAltLeft size={100}/>
            <p>Staff is very courteous and professional, and rentals are reasonably priced given their model. Highly satisfied!</p>
            <BiSolidStar size={25} color='gold'/><BiSolidStar size={25} color='gold'/><BiSolidStar size={25} color='gold'/><BiSolidStar size={25} color='gold'/><BiSolidStar size={25} color='gold'/>
          <div className='Client-Photo'>
          <img src={client2} />
          <h4>Jessica Smith</h4>
          </div>

        </div>
        <div className='Testimonials-Bottom'>
        <BiSolidQuoteAltLeft size={100}/>
            <p>At first I was hesistent because of the price but as soon as I stepped in the Tesla that feeling was gone, Definitely recommend it! </p>
            <div className='Client-Photo'>
          <img src={client3} />
          <h4>Kason Hoff</h4>
          </div>

        </div>
        </div>
    </div>
  )
}
