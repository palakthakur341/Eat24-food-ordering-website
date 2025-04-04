// import React from 'react'
import './Header.css'
import header_img from '../../../assets/header_img.png';


const Header = () => {
  return (
    <div className='header'>
      <img src={header_img} alt="food 10"/>
        <div className='header-contents'>
            <h2>order your favourite food</h2>
            <p>choose from the diverse menu featuring the delectablearray of dishes </p>
            <button>View menu</button>

        </div>
      
    </div>
  );
}

export default Header
