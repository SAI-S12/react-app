import React, { useState } from 'react'
import "./Loginpage.css"
import { assets } from '../../assets/food del assets (1)/frontend_assets/assets'

const Loginpage = ({ setShowLogin }) => {
    const [Cstate, setcState] = useState("sign-in")
    return (
        <div className='back'>
            <form action=" " className="login-pop">
                <div className="log">
                    <h2>{Cstate}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="pop-inp">
                    {Cstate==="login"?<></>:<input type="text" placeholder='your name' />}<br/>
                    <input type="text" placeholder='your email' /><br />
                    <input type="text" placeholder="password" /><br />
                </div>
                <button>{Cstate === "sign-in" ? "create acccount" : "Login"}</button>
                <div className="con">
                    <input type="checkbox" name="" id="" />
                    <p>by continuig , i agree to the terms of use & privacy policy</p>
                </div>
                {Cstate === "login" ? <p className='a1'>create an acount ? <span className='a2' onClick={()=>setcState("sign-in")}>click here</span></p> : <p className='b1'>already have an account ? <span onClick={()=>setcState("login")} className='b2'>login here</span></p>}


            </form>
        </div>
    )
}

export default Loginpage
