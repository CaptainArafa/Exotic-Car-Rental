import './App.css'
import { useRef, useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { HomePage } from './Pages/HomePage'
import { Fleet } from './Pages/Fleet'
import { Footer } from './Components/Footer'
import { Contact } from './Pages/Contact'
import { OurTeam } from './Pages/OurTeam'
import { Signin } from './Pages/Signin'
import { Login } from './Pages/Login'
import { Reservations } from './Components/Reservations'
import { Rent } from './Pages/Rent'




function App() {
  const [currentUser,setCurrentUser] = useState({})
  const [car,setCar] =useState(null)
  const rentalSearch = useRef(null)

  const scrollToSearch = (ref)=>{
    window.scrollTo({
      top:ref.current.offsetTop,
      behavior:'smooth'
    })
  }
 

  return (
    <>
    <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path='/' element={<HomePage currentUser={currentUser} setCar={setCar} car={car} scrollToSearch={scrollToSearch} rentalSearch={rentalSearch}/>}  />
        <Route path='/fleet' element={<Fleet setCar={setCar}  />} />
        <Route path='/rent' element={<Rent currentUser={currentUser} setCar={setCar}  car={car}/>} />
        <Route path='/team' element={<OurTeam />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/Signin' element={<Signin />} />
        <Route path='/login' element={<Login  />} />
        <Route path='/reservations' element={<Reservations currentUser={currentUser}/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
