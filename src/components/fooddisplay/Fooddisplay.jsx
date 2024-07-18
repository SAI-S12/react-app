import React, { useContext } from 'react'
import { Context } from '../context/StoreContext'
import Fooditem from '../fooditem/Fooditem'
import "./Fooddisplay.css"


const Fooddisplay = ({Category}) => {

    const {food_list}=useContext(Context)

  return (
    <div className='food-display' id='food-display'>
      <h1>top dishes</h1>
      <div className="food-i">
      {food_list.map((item)=>{
        if(Category==="all" || Category===item.category){
          return(
        
            <Fooditem  id={item._id} name={item.name}  price={item.price}  img={item.image} description={item.description}/>
      
        )
        }
        })}
      </div>
    </div>
  )
}

export default Fooddisplay