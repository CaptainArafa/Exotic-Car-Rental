import React from 'react'
import CarBackground from '../assets/pages background.jpeg'
import Mail from '../assets/MailImage.png'
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";


export const Contact = () => {
  return (
    <div className='Outer-Contact-Container'>
<div class="custom-shape-divider-top-1693841719">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
    <div className='Contact-Container'>
        <div className='Contact-Title'>
            <h2>Have Some Questions?</h2>
            <p>If you have any questions regarding our services or our terms of service please feel free to leave us a message down below.</p>
        </div>
        <div className='Contact-Info'>
            <div className='Contact-Info-Details'> 
           
            <div className='Contact-Info-List'>
                <h3>Contact Us</h3>
                <div className='Contact-Info-List-Specific'>
                    <ul>
                        <li className='Contact-Info-List-Li'><div><BsTelephoneFill size={30}  className='Contact-Info-Icon' /> <h4>+123 456-789</h4></div></li>
                        <li className='Contact-Info-List-Li'><div><MdEmail size={30} className='Contact-Info-Icon'/><h4>ExoticRentals@gmail.com</h4></div></li>
                        <li className='Contact-Info-List-Li'><div><MdLocationPin size={30} className='Contact-Info-Icon'/> <h4>Los Angeles, CA</h4></div></li>
                    </ul>
                </div>
                </div>
               

            </div>
            <div className='Contact-Form'>
                <form>
                    <input className='Contact-Form-Input' type="text" placeholder='First Name' />
                    <input className='Contact-Form-Input' type="text" placeholder='Last Name' />
                    <input className='Contact-Form-Input' type="text" placeholder='Phone' />
                    <input className='Contact-Form-Input' type="email" placeholder='Email' />
                    <textarea className='Contact-Form-Textarea' placeholder='Message' />
                    <button className='Contact-Form-Button'>Send Message</button>
                    <p>Your contact info will not be shared with any third party or Company, your privacy is very important to us </p>
                </form>

            </div>
        </div>

    </div>
    </div>
  )
}
