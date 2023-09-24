import React from 'react'
import Logo from "../assets/LOGO.png"

export const Footer = () => {
  return (
    <div className='Footer-Container'>
        <div className='wrapper'>
            <div className='Footer-AboutUs'>
                <h2>ABOUT US</h2>
                <p>We are an Exotic car rental business here to<br/> provide you with
                 the luxurious feeling of driving an<br/> Exotic without paying full price for one</p>
            </div>
            <div className='Footer-Branches'>
                <h2>OUR BRANCHES</h2>
                <ul>
                    <li>Los Angeles, CA</li>
                    <li>Houston, TX</li>
                    <li>Miami, FL</li>
                    <li>San Francisco, CA</li>
                    <li>San Diego, CA</li>
                </ul>
            </div>
            <div className='Footer-Working-Hours'>
                <h2>WORKING HOURS</h2>
                <ul>
                    <li>Mon-Fri: 9:00 AM - 9:00 PM</li>
                    <li>Sat: 11:00 AM - 6:00 PM</li>
                    <li>Sun: CLOSED</li>
                </ul>
            </div>
            <div className='Footer-Newsletter'>
                <h2>Newsletter</h2>
                <p>Join our Newsletter for updates on our car collection and prices</p>
                <div>
                <input placeholder='Enter Email Address'/>
                <button>Send</button>
                </div>

            </div>
            </div>
    </div>
  )
}
