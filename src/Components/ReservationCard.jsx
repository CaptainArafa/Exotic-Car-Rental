import { deleteDoc, doc } from 'firebase/firestore';
import {db} from '../Config/firebase'
import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";

export const ReservationCard = ({reservation}) => {

    
    // Cancel Reservation
  
    const cancelReservation = async (id) =>{
        const Reservation = doc(db,'Reservations',id)
        await deleteDoc(Reservation)
        
    }
    
  return (
    <div className='ReservationCard-Container'>
        <div className='ReservationCard-Left'>
            <img src={reservation.imagePNG} alt="Car-Img" />
            <div className='ReservationCard-Left-Info'>
                <h3>{reservation.Car}</h3>
                <div className='ReservationCard-Left-Info-Inner'>
                    <div><h5>{reservation.Pickup}</h5> <h5>{reservation.From}</h5></div> 
                    <BsArrowRightShort /> <div><h5>{reservation.Dropoff}</h5> <h5>{reservation.Until}</h5></div>
                </div>
            </div>
        </div>
        <div className='ReservationCard-Right'>
            <h4>${reservation.PriceTotal}</h4>
            <h5>{reservation.DurationDays} Days, ${reservation.Price}</h5>
            <button onClick={()=>cancelReservation(reservation.ID)} className='Cancel-Reservation'>Cancel</button>
        </div>
    </div>
  )
}
