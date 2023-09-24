import React, { useState } from 'react'
import { db} from '../Config/firebase'
import {collection, getDocs, onSnapshot, query, where} from 'firebase/firestore'
import { ReservationCard } from './ReservationCard'

export const Reservations = ({currentUser}) => {
    
    const [reservatons,setReservations] = useState([])

    //Collection Reference
    const reservationsRef = collection(db, "Reservations")

    //when user changes
    


    //query
      const q = query(reservationsRef,where("Email", "==",`${currentUser?.email}`))
      

      //Getting reservations
       onSnapshot(reservationsRef,async()=>{
        const data = await getDocs(q)
        setReservations(data.docs.map((doc)=>({...doc.data(), ID:doc.id})))
       })
  
  return (
    <div className='Reservations-Container'>
      <h1>Reservations</h1>
      {reservatons.length>=1?
      <div>
      {reservatons&& reservatons.map((reservation)=>{
        return <ReservationCard reservation={reservation} />
    })}</div>: <h2 className='Reservations-NoCars'>Sorry, no Reservations have been made :(</h2>}
    </div>
  )
}
