import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/food del assets (1)/frontend_assets/assets";

export const Context=createContext(null)



 export const StoreContextProvider=(props)=>{
     
     const [cartItems,setCartItems]=useState({})
       
       const addProduct=(itemId)=>{
        if(!cartItems[itemId]){
           setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
      }


      const removeProduct=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }

      useEffect(()=>{
         console.log(cartItems)
      },[cartItems])



    const contextValue={
           food_list,
           cartItems,
           setCartItems,
           addProduct,
           removeProduct
    }       
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}