import React from 'react'
import {auth} from '../Config/firebase'
import {signOut} from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'

export const UserNav = () => {

  const navigate = useNavigate()

  const logout = async () => {
    await signOut(auth)
    navigate('login')
    

  }
  return (
    <div className='UserNav-Buttons'>
        <button className='UserNav-Logout' onClick={logout}>Logout</button>
    </div>
  )
}
