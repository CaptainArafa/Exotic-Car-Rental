import React, { useState } from 'react'
import {Cars} from '../Databases/Car-Database'
import RoycePNG from "../assets/RollsRoyce.png"
import Royce from "../assets/RollsRoyceGhost2018.jpg"
import { AiFillStar } from "react-icons/ai";


export const CarShow = ({setCar,scrollToSearch,rentalSearch}) => {
    const [active,setActive] = useState(false)
    const [CurrentCar,SetCurrentCar] = useState({
        id:1,
        Name:"Rolls Royce Ghost",
        Model_Year:"2018",
        Price: "900",
        Rating: "5.0",
        image: Royce,
        png:RoycePNG,
        Model: 'Ghost',
        Brand:"Rolls Royce"

    })

    const handleClick = (ID) => {
        Cars.map((car)=>{
            if(car.id===ID){
                SetCurrentCar(car)
            }
            else{
                return car
            }
        })
    }
    const bookButtonFunction = () =>{
        setCar(CurrentCar.Name)
        scrollToSearch(rentalSearch)
    }

  return (
    <>
    <div className='Car-Show-Title'>
        <h1>Our Car Selection</h1>
        <p>Choose an EXOTIC from this selection and book it now</p>
    </div>
    <div className='Car-Show-Container'>
        <div className='Car-Show-List'>
            {Cars.map((car)=>{
                return <div id={CurrentCar.id===car.id&&"Active-Car"} key={car.id} onClick={()=>handleClick(car.id)}>{car.Name}</div>
            })}
        </div>
        <div className='Car-Show-Car'>
         <img width={600} src={CurrentCar.png}/>
        </div>
        <div className='Car-Show-Specs'>
            <div className='Car-Show-Specs-Title'>
              <span>${CurrentCar.Price}</span> / rent per day
            </div>
            <div className='Car-Show-Specs-List'>
                
            <div><h4>Model</h4>|<h4>{CurrentCar.Model}</h4></div>
            <div><h4>Transmission</h4> | <h4>automatic</h4></div>
            <div><h4>Brand</h4> | <h4>{CurrentCar.Brand}</h4></div>
            <div className='Car-Show-Rating'>
            <h4>Rating</h4> | <h4><AiFillStar color='goldenrod'/><AiFillStar color='goldenrod'/><AiFillStar color='goldenrod'/><AiFillStar color='goldenrod'/><AiFillStar color='goldenrod'/></h4>
                </div>
            </div>
            <button className='Car-Show-Book-Button' onClick={bookButtonFunction}>Book Now</button>

        </div>

    </div>
    </>
  )
}
