import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/food del assets (1)/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="foot">
        <div className="ft-content">
            <div className="left">
                <img src={assets.logo1} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus placeat facere repudiandae perferendis, laboriosam iste quibusdam quaerat at ex beatae?</p>
                 <div className="sicons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>
            <div className="middle">
                <h2>company</h2>
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>delivary</li>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className="right">
              <h2>Get In Touch</h2>
              <ul>
                <li>
                    +91923567325</li>
                <li>conatct@cheesecakefactory.com</li>
              </ul>
            </div>
        </div>
      <hr />
      <p className='footer2'>copy-rights 2024 @totamo.com-ALL Right Reserved</p>
    </div>
  )
}

export default Footer

