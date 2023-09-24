import React from 'react'
import Rolls from '../assets/RollsRoyce.png'


export const HomePageFront = ({scrollToSearch,rentalSearch}) => {
  return (
    <div className='Front-Container'>
        <div className='Front-Text'>
        <h4>Drive your dream car now</h4>
        <div class="custom-shape-divider-top-1693413012">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
    </svg>
</div>
        <h1 className='Front-Text-Main'>Rent <span>Exotic</span> cars with us today</h1>
        <p>Obtain an exotic car with just a click of a button </p>
        <button onClick={()=>scrollToSearch(rentalSearch)} className='Front-Text-button'>Book Ride</button>
        </div>
        <div>
            <img className='Front-Exotic-Car' src={Rolls}/>
        </div>

    </div>
  )
}
