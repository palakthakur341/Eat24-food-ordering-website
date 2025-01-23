// import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi unde adipisci exercitationem eaque beatae nemo dolores culpa tempora, eius ad, ipsa est vel minima optio? Cupiditate impedit laborum fuga. Totam!</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery </li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className='footer-content-right'>
                <h2> GET IN TOUCH</h2>
                <ul>
                    <li>+1-924-679-7890</li>
                    <li>thakurpalak@gmail.com</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer
