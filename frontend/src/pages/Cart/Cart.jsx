import { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext.jsx';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);
  const navigate=useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if ((cartItems[item._id] ?? 0) > 0) {
            return (
              // eslint-disable-next-line react/jsx-key
              <div key={item._id}>
                <div className='cart-items-title cart-items-item' key={item._id}>
                  <img src={url+"/images/"+item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            )
          }
          return null; // Render nothing if the item is not in the cart
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'> 
          <h2>Cart Total</h2>
            <div>
              <div className='cart-total-details'>
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()==0?0:2}</p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                    <b>Total</b>
                    <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
              
            </div>
            <button onClick={()=>navigate('/order')}> PROCEED TO CHECKOUT</button>

        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have a promo code ,Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo code'/>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
