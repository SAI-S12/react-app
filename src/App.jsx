import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Loginpage from './components/Loginpage/Loginpage'


const App = () => {

  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
       {showLogin?<Loginpage setShowLogin={setShowLogin}/>:<> </>}
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Cart />} />
        </Routes>
     
        <Footer />
      </div>
    </>
  )
}

export default App