import React from 'react'
import { menu_list } from '../../assets/food del assets (1)/frontend_assets/assets'
import "./Exploremenu.css"

const Exploremenu = ({Category,setCategory}) => {
  return (
    <div className='explore-item' id='explore-menu'>
        <div className="menu">
            <h1>
                explore our menu
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque maxime corrupti tempora id impedit aliquid, libero rerum quasi. Reprehenderit, molestiae?</p>
        </div>
        <div className="items">
            {menu_list.map((item,index)=>{
                return(
                    <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index} className="explore">
                        <img className={Category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />

    </div>
  )
}

export default Exploremenu