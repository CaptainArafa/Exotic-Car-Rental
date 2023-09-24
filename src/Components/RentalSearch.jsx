import React, { useEffect, useState } from 'react'
import {Cars} from "../Databases/Car-Database"
import { MdLocationPin } from "react-icons/md";
import { Locations } from '../Databases/Branches-Database'
import { BsCalendarWeekFill, BsFillCalendarMinusFill,BsFillCarFrontFill } from "react-icons/bs";
import { BookingPopup } from './BookingPopup';
import { GrClose } from "react-icons/gr";


export const RentalSearch = ({car,setCar, currentUser,rentalSearch}) => {
  var CurrentDate = new Date().toISOString().split('T')[0]
  const [pickup,setPickup] = useState(null)
  const [dropoff,setDropoff] = useState(null)
  const [From,setFrom] = useState(null)
  const [Until,setUntil] = useState(null)
  const [displayPopUp,setDisplayPopUp] = useState(false)
  const [newReservation,setNewReservation] = useState(false)
  const [message,setMessage] = useState(null)

  useEffect(()=>{
   
    if(dropoff=="select location"){
      setDropoff(null)
    }
    if(pickup=="select location"){
      setPickup(null)
    }
    if(car=="select a rental"){
      setCar(null)
    }
  },[dropoff,pickup,car])
 
  const handleClick = () =>{
    if(pickup&&From&&Until&&dropoff&&car){
      setDisplayPopUp(true)
    }
    else{
      setMessage('All fields are required')
    }
  }



  return (
    <div className='Rental-Search-Container' ref={rentalSearch}>
        <h2>Book an Exotic</h2>
        <div className='Rental-Search-Input-Container'>
          
          {newReservation && <div className='Reservation-Message'>New Reservation confirmed!</div>}
        {message&& <div className='Rental-Search-Error-Msg'><h3>{message}</h3><button onClick={()=>setMessage(false)}><GrClose /></button></div>}

        <div className='pickup Rental-Search-Input'>
        <label><h5>Pick-Up</h5> <MdLocationPin size={30} color='#07271d'/></label>
        <select className='Select-Input' name='cars' id='cars' onChange={e=>setPickup(e.target.value)}>
          <option value={null}>select location </option>
          {Locations.map((Location)=>{
            return <option key={Location.id} value={Location.Location}>{Location.Location}</option>
          })}
        </select>
        </div>
        <div className='dropoff Rental-Search-Input'>
        <label><h5>Drop-Off</h5><MdLocationPin size={30} color='#07271d'/></label>
        <select className='Select-Input' name='cars' id='cars' onChange={e=>setDropoff(e.target.value)}>
          <option value={null}>select location </option>
          {Locations.map((Location)=>{
            return <option key={Location.id} value={Location.Location}>{Location.Location}</option>
          })}
        </select>
        </div>
        <div className='rentalcar Rental-Search-Input'>
        <label><h5>Car</h5><BsFillCarFrontFill size={30} color='#07271d'/></label>
        <select className='Select-Input' name='cars' id='cars' onChange={e=>setCar(e.target.value)}>
          <option value={car}>select a rental </option>
          {Cars.map((Car)=>{
            return <option selected={car===Car.Name? true:false} key={Car.id} >{Car.Name}</option>
          })}
        </select>
        </div>
        <div className='from Rental-Search-Input'>
        <label><h5>From</h5><BsCalendarWeekFill size={20} color='#07271d'/></label>
        <input type='date' min={CurrentDate}  onChange={e=>setFrom(e.target.value)} />
        </div>
        <div className='until Rental-Search-Input'>
        <label><h5>Until</h5><BsCalendarWeekFill size={20} color='#07271d'/></label>
        <input type='date' min={From&&From} disabled={From?false:true} onChange={e=>setUntil(e.target.value)} />
        </div>
        </div>
        <button className='Rental-Search-Button' onClick={handleClick}>Search</button>
        {displayPopUp && <BookingPopup currentUser={currentUser} pickup={pickup} dropoff={dropoff} car={car} from={From} until={Until} setDisplayPopUp={setDisplayPopUp} setNewReservation={setNewReservation} setMessage={setMessage}/>}
    </div>
  )
}
