// import React from 'react'
import {useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import PropTypes from 'prop-types';
import './FoodDisplay.css';

const FoodDisplay = ({category}) => {
    const {food_list} =useContext(StoreContext)
    
  return (
    <div className='food-display' id='food-display'>
      <h2> Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item,index)=>{
          if(category==="all" || category===item.category)
          {
            return (
            <FoodItem key={index} name={item.name} id={item._id} description={item.description} price={item.price} image={item.image}/>
            );
          }
          return null;
            
        })}
      </div>
    </div>
  )
}
FoodDisplay.propTypes = {
    category: PropTypes.string, // You can change this depending on the type of 'category'
  };
  

export default FoodDisplay;
