import React from 'react'
import { HomePageFront } from '../Components/HomePageFront'
import { RentalSearch } from '../Components/RentalSearch'
import { CarShow } from '../Components/CarShow'
import { PageSplitter } from '../Components/PageSplitter'
import { ClientTestimonials } from '../Components/ClientTestimonials'
import { FAQ } from '../Components/FAQ'



export const HomePage = ({currentUser,car,setCar,rentalSearch,scrollToSearch}) => {
  

  return (
    <>
    <HomePageFront scrollToSearch={scrollToSearch} rentalSearch={rentalSearch} />
    <div className='Homepage-Rent-Container'>
    <RentalSearch rentalSearch={rentalSearch}  car={car} setCar={setCar} currentUser={currentUser} />
    </div>
    <PageSplitter />
    <CarShow setCar={setCar} scrollToSearch={scrollToSearch} rentalSearch={rentalSearch}  />
    <ClientTestimonials />
    <FAQ />
    </>
  )
}
