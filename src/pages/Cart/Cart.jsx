import React, { useContext } from 'react'
import "./Cart.css"
import { food_list } from '../../assets/food del assets (1)/frontend_assets/assets'
import { Context } from '../../components/context/StoreContext'

const Cart = () => {

  const { cartItems, food_list, removeProduct } = useContext(Context)

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className="product1" id='tit'>
          <p>items</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="tt">
                <div className="product1 " id='items'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p className='pr'>{item.price}</p>
                  <p className='idd'>{cartItems[item._id]}</p>
                  <p className='tp'>{item.price * cartItems[item._id]}</p>
                  <p className='rm' onClick={() => removeProduct(item._id)}>x</p>
                </div>
                 <hr/>
              </div>

            )
          }
        })

        }

      </div>

    </div>
  )
}

export default Cart
