import React, { useContext } from 'react'
import "./Fooditem.css"
import { assets } from '../../assets/food del assets (1)/frontend_assets/assets'
import { Context } from '../context/StoreContext'

const Fooditem = ({id,price,description,name,img}) => {

    const{cartItems,addProduct,removeProduct}=useContext(Context)

  return (
    <div className='foo-item'>
        <div className="foo-ite">
            <img className='food-img1' src={img} alt="" />
            {!cartItems[id]
            ?
            <button className='add' onClick={()=>addProduct(id)}>Add To Cart</button>: 
            <div className='counter'>
                  <img onClick={()=>removeProduct(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[id]}</p>
                  <img  onClick={()=>addProduct(id)}src={assets.add_icon_green} alt="" />
            </div> }
        </div>
        <div className="food-info">
            <div className="food-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="descrip">{description}</p>
            <p className="prize">${price}</p>
        </div>

    </div>
  )
}

export default Fooditem
