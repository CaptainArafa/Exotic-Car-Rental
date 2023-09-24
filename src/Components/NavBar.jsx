import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/LOGO.png'
import {auth} from '../Config/firebase'
import {onAuthStateChanged} from 'firebase/auth'
import { FaRegUser } from "react-icons/fa";
import { UserNav } from './UserNav'
import {UserNavMobile} from './UserNavMobile'

export const NavBar = ({currentUser,setCurrentUser}) => {

  const [mobileMenu,setMobileMenu] = useState(false)

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  onAuthStateChanged(auth,(currentUser)=>{
    setCurrentUser(currentUser)
  })
  useEffect(()=>{
    console.log(currentUser)
  },[currentUser])
  return (
    <nav className='Navbar-Container'>
        <h3 className='Logo'><NavLink to={'/'}><img src={Logo} /></NavLink></h3>
        <div className='Nav-Links'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/fleet'}>Our Fleet</NavLink>
        <NavLink to={'/rent'}>Rent</NavLink>
        <NavLink to={'/team'}>Our Team</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
        <NavLink to={'/reservations'} className='UserNav-Orders'>Reservations</NavLink>
        </div>
        {currentUser?<UserNav />:<div className='Nav-Buttons'>
        <NavLink className='Login-Button' to={'/login'}>Login</NavLink>
        <NavLink className='SignIn-Button'to={'/Signin'}>Register</NavLink>
        </div> }
        <div className='Hamburger-Menu'>
          <div className='Hamburger-Logo'>
            <button onClick={handleMobileMenu} className={mobileMenu?'Hamburger-Button Active':'Hamburger-Button'}>
            <div className='bar'>

            </div>
            </button>
          </div>
            <div className={mobileMenu?'Hamburger-Menu-Links':'Hamburger-Menu-Links Hide'}>
            <NavLink onClick={handleMobileMenu} style={{textDecoration:'none'}} to={"/"}>Home</NavLink>
            <NavLink onClick={handleMobileMenu} style={{textDecoration:'none'}} to={"/fleet"}>Our Fleet</NavLink>
            <NavLink onClick={handleMobileMenu} style={{textDecoration:'none'}} to={'/rent'}>Rent</NavLink>
            <NavLink onClick={handleMobileMenu} style={{textDecoration:'none'}} to={"/team"}>Our Team</NavLink> 
            <NavLink onClick={handleMobileMenu} style={{textDecoration:'none'}} to={"/contact"}>Contact</NavLink>
            <NavLink onClick={handleMobileMenu} style={{textDecoration:'none'}} to={"/reservations"}>Reservations</NavLink>
            {currentUser?<UserNavMobile/>:<NavLink onClick={handleMobileMenu} to={"/SignIn"}><FaRegUser size={30}  /></NavLink>}
            </div>
        </div>
       
        
        
    </nav> 
  )
}
