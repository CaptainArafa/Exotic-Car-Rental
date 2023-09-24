import React, { useEffect, useState } from 'react'
import { Cars } from '../Databases/Car-Database'
import {auth, db} from '../Config/firebase'
import {collection, addDoc} from 'firebase/firestore'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { Loading } from './LoadingSpinner';

export const BookingPopup = ({pickup,dropoff,until,from,car,setDisplayPopUp,setNewReservation, currentUser,setMessage}) => {
  const [selectedCar,setSelectedCar] = useState(null)
  const [timeDifference,setTimeDifference] = useState(0)


  //Contact Info Inputs

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errMessage,setErrMessage] = useState('')
  const [loading,setLoading] = useState(false)


  //Book Reservation Function
  const reservationsRef = collection(db, "Reservations")

  const addReservation = async (e) => {
    e.preventDefault()
    if(!currentUser?.email){
      try{
        setLoading(true)
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (user)=>{
          await addDoc(reservationsRef, {Pickup:pickup,Dropoff:dropoff,Until:until,From:from,Car:car,Email:user.user.email,imagePNG:selectedCar[0]?.png,DurationDays:timeDifference,PriceTotal:selectedCar[0]?.Price*timeDifference,Price:selectedCar[0]?.Price})
          setDisplayPopUp(false)
          setNewReservation(true)
          setLoading(false)
  
        }).catch(err=>{
          console.log(err)
        })
        
  
 
  
      }
      catch(error){
        setErrMessage(error.message)
      }
    }
  else{
    try{
    await addDoc(reservationsRef, {Pickup:pickup,Dropoff:dropoff,Until:until,From:from,Car:car,Email:currentUser.email,imagePNG:selectedCar[0]?.png,DurationDays:timeDifference,PriceTotal:selectedCar[0]?.Price*timeDifference,Price:selectedCar[0]?.Price})
    setDisplayPopUp(false)
    setNewReservation(true)
    setMessage(null)
    setLoading(false)
    }
    catch(error){
      setErrMessage(error.message)
    }
  
  }
}

  useEffect(()=>{
   setSelectedCar(Cars.filter((Vehicle)=>{
      if(Vehicle.Name==car){
        return Vehicle
      }
    }))
    console.log(selectedCar)
    

    let FromDate= new Date(from)
    let UntilDate= new Date(until)
    setTimeDifference((UntilDate.getTime()-FromDate.getTime())/ (1000*3600*24)+1)
    
     
    console.log(`current user is ${car}`)
  

  },[])


  
  
  return (
    <div className='BookingPopUp-Container-Outer'>
    <div className='BookingPopUp-Container'>
        <div className='BookingPopUp-Header'>
          <h1>Complete Booking Process</h1>
          <button onClick={()=>setDisplayPopUp(false)}>x</button> 
        </div>
        <div>
          <div className="BookingPopUp-Selection">
            <h2>Summary</h2>
            <div className='BookingPopUp-Grid'>
            <div className='BookingPopUp-PickUp'>
              <div className='BookingPopUp-PickUp-Location'>
              <h5>Pickup Location</h5>
              <h3>{pickup}</h3>
              </div>
              <div className='BookingPopUp-PickUp-Date'>
              <h5>Pickup Date</h5>
              <h3>{from}</h3>
              </div>
              
            </div>
            <div className='BookingPopUp-DropOff'>
              <div className='BookingPopUp-DropOff-Location'>
              <h5>Dropoff Location</h5>
              <h3>{dropoff}</h3>
              </div>
              <div className='BookingPopUp-DropOff-Date'>
              <h5>Dropoff Date</h5>
              <h3>{until}</h3>
              </div>
              
            </div>
            <div className='BookingPopUp-Car'>
              <h4>Selected Car</h4>
              <h3>{car}</h3>
              <img src={selectedCar ? selectedCar[0]?.png : null} />
            </div>
            </div>
          </div>
          <div className='BookingPopUp-Info'>
            <h2>{currentUser?.email?'Contact info':'create account'}</h2>
            <form id='Contact-Info' onSubmit={e=>addReservation(e)}>
              <div className='FirstName-Input'>
              <label htmlFor="FirstName"><h3>First Name</h3><h5>*</h5></label>
              <input id='FirstName' required type="text" placeholder='Enter your First Name'/>
              </div>
              <div className='LastName-Input'>
              <label htmlFor="LastName"><h3>Last Name</h3><h5>*</h5></label>
              <input id='LastName' required type="text" placeholder='Enter your Last Name'/>
              </div>

              <div className='Phone-Input'>
              <label htmlFor="Phone"><h3>Phone Number</h3><h5>*</h5></label>
              <input id='Phone' required type="number" placeholder='Enter your Phone Number'/>
              </div>

              <div className='Age-Input'>
              <label htmlFor="Age"><h3>Age</h3><h5>*</h5></label>
              <input id='Age' required type="number" placeholder='Enter your Age'/>
              </div>
              { currentUser?.email? null:<>
              <div className='Email-Input'>
              <label htmlFor="Email"><h3>Email</h3><h5>*</h5></label>
              <input id='Email' required type="email" placeholder='Enter your Email' onChange={e=>setEmail(e.target.value)}/>
              {errMessage && <h5 style={{color:'red'}}>{errMessage}</h5>}
              </div>
              <div className='Password-Input'>
              <label htmlFor="Password"><h3>Password</h3><h5>*</h5></label>
              <input id='Password' required type="password" placeholder='Enter a Password' onChange={e=>setPassword(e.target.value)}/>
              </div>
              </>
              } 
              
            </form>
            <div className='BookingPopUp-Total'>
              <div className='inner'>
                <div className='BookingPopUp-Total-Left'>
                  <h3>Total</h3>
                  <h5>for {timeDifference} days, ${selectedCar&& selectedCar[0].Price}/day</h5>
                </div>
                <div className='BookingPopUp-Total-Right'>
                  <h3>${selectedCar&& selectedCar[0]?.Price*timeDifference}</h3>
                  <h5>TAX Included</h5>
                </div>
                </div>
                <button type='submit' form='Contact-Info' className='bookingPopUp-Confirm-Button'>Confirm</button>
                {loading&&<div className='Loading-Spinner'><Loading /></div>}

              </div>

          </div>
        </div>
    </div>
    </div>
  )
}
