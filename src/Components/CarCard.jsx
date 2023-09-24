import React from 'react'
import { AiFillStar, AiOutlineStar, AiFillCar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export const CarCard = ({car,setCar}) => {

  const Navigate = useNavigate()

  const bookCar = () => {
    setCar(car.Name)
    Navigate('/rent')
    
  }

  const starRating = (car) =>{ 
    let starArr = []
    for(let i =0; i<car.Rating; i++){
      starArr.push(<AiFillStar size={30} color='goldenrod' />)

    }
    if(starArr.length<5){
      starArr.push(<AiOutlineStar size={30} color='gray' />)
    }
    return starArr
  }
  return (
    <div className='Car-Card-Container'>
       <div className='Car-Card-Upper'>
        <img src={car.image} />
        <h5 className='Car-Rating'>{car.Rating}{car.Rating%1===0&&'.0'}<AiFillStar size={30} color='#07271d' /></h5>
       </div>
       <div className='Car-Card-Lower'>
        <h2 className='Car-Name'>{car.Name} {car.Model_Year}</h2>
        <div className='Car-Card-Rating'> 
          <div>{starRating(car)}</div><div className='transmission'><AiFillCar />{car.transmission}</div>
          </div>
        <h2 className='Car-Price'><span>${car.Price}</span>/day</h2>
        <button className='Book-Button' onClick={bookCar}>Book Now</button>
       </div>
    </div>
  )
}
