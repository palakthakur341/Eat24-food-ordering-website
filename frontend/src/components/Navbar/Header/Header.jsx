// import React from 'react'
import './Header.css'
import { assets } from '../../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <img src={assets.food_10} alt=""/>
        <div className='header-contents'>
            <h2>order your favourite food</h2>
            <p>choose from the diverse menu featuring the delectablearray of dishes </p>
            <button>View menu</button>

        </div>
      
    </div>
  );
}

export default Header
