import React from 'react'
import {auth} from '../Config/firebase'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { BiLogOut } from "react-icons/bi";
export const UserNavMobile = () => {

  const navigate = useNavigate()

  const logout = async () => {
    await signOut(auth)
    navigate('login')
    

  }
  return (
    <div className='UserNav-Buttons'>
        <button className='UserNav-Logout-Mobile' onClick={logout}><BiLogOut size={30}/></button>
    </div>
  )
}
