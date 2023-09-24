import React from 'react'
import CarBackground from '../assets/pages background.jpeg'
import {Staff} from '../Databases/Staff-Database'
import { StaffCard } from '../Components/StaffCard'


export const OurTeam = () => {
  return (
    <div>
    <div className="Staff-Page-Container">
    <img className='car-background' src={CarBackground}/>
        <h1 className='Staff-Title'>Meet our team</h1>
        <div className="Staff-Container">
            {Staff.map((Person)=>{
                return <StaffCard attr={Person} />
            })}
        </div>
    </div>
        
  
    </div>
  )
}
