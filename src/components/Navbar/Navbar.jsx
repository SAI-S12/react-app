import React, { useState } from 'react'
import { assets } from '../../assets/food del assets (1)/frontend_assets/assets';
import { Link } from 'react-router-dom';
  


const Navbar = ({setShowLogin}) => {
   const[menu,setMenu]=useState("home")
  return (
    <div className='nav-bar'>
        <div className="nav-left">
            <img src={assets.logo1} alt="" className="logo" />
        </div>
        <div className="nav-middle">
            <ul>
               <Link to='/'> <li onClick={()=>setMenu("home")} className={menu==="home"?"ac":" "}>home</li></Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"ac":" "}>menu</a>
                <a href='#app12'  onClick={()=>setMenu("mobil-app")} className={menu==="mobil-app"?"ac":" "}>mobil app</a>
                <a href='#foot'   onClick={()=>setMenu("contact us")}className={menu==="contact us"?"ac":" "}>contact us</a>
            </ul>
        </div>
        <div className="nav-right">
            <img src={assets.search_icon}alt="" className="search-icon" />
              <Link to='./Cart'> <img src={assets.basket_icon} alt="" className="basket" /></Link>
            <button className="sign-in" onClick={()=>setShowLogin(true)}>Sign-up</button>
        </div>
    </div>
  )
}

export default Navbar;