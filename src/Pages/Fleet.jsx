import React from 'react'
import CarBackground from '../assets/pages background.jpeg'
import { NavBar } from '../Components/NavBar'
import {Cars} from '../Databases/Car-Database'
import { CarCard } from '../Components/CarCard'

export const Fleet = ({setCar}) => {
  return (
    <>
    <div className='Fleet-Page-Title'>
    <img className='car-background' src={CarBackground}/>
        <h1 className='Staff-Title'>Our Fleet</h1>
    </div>
        <div className='Fleet-Container'>
            {Cars.map((car)=>{
                return <CarCard setCar={setCar} key={car.id} car={{...car}} />
            })}
        </div>
    </>
    
  )
}
