import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/E/Exploremenu'
import Fooddisplay from '../../components/fooddisplay/Fooddisplay'
import AppDownload from '../../components/AppDownload/AppDownload'


const Home = () => {

  const [Category,setCategory]=useState("all")

  return (
    <div>
      <Header/>
      <Exploremenu Category={Category} setCategory={setCategory}/>
      <Fooddisplay Category={Category} />
      <AppDownload/>
    </div>
  )
}

export default Home