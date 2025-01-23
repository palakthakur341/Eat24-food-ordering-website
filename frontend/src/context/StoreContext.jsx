// import React from 'react'
import { createContext,useState } from "react";
import {food_list} from "../assets/assets";
export const StoreContext = createContext(null)
import PropTypes from 'prop-types';
const StoreContextProvider = ({children})=>{
    const [cartItems,setCartItem] =useState({});
    const addTocart=(itemId)=>{
        if(!cartItems[itemId])
        {
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }
    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])
    const getTotalCartAmount=()=>{
        let TotalAmount=0;
        for(const item in cartItems)
        {   if(cartItems[item]>0){
            let itemInfo=food_list.find((product)=>product._id===item);
            TotalAmount+=itemInfo.price* cartItems[item];

        }
            
        }
        return TotalAmount;
    }

    const contextValue ={
        food_list,
        cartItems,
        setCartItem,
        addTocart,
        removeFromCart,
        getTotalCartAmount

    }
    console.log("Children passed to StoreContextProvider:", children);
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}
StoreContextProvider.propTypes = {
    children: PropTypes.string, // You can change this depending on the type of 'category'
  };
export default StoreContextProvider;