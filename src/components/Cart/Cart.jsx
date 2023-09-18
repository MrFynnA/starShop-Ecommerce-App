import React from 'react';
import CartCover from '../UI/CartCover';
import classes from './Cart.module.css';
import CartContext from '../CartContext/CartContext';
import CartItem from './CartItem';
import {useSelector,useDispatch} from 'react-redux'
import { useContext, useEffect } from 'react';
import BackDrop from '../UI/BackDrop';
import { CartVisibleAction } from '../store/redStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDom from 'react-dom';

const Cart = (props) => {
  const[disCountMessage,setDisCountMessage]=useState('')
  const dispatch=useDispatch()
  const ctx=useContext(CartContext)
  const{cartItems,totalAmount,addDisCount,totalAfterDisCount}=ctx
  const cartVisibility=useSelector(state=>state.visibility.cartVisibility)
  const totalQuantity=cartItems.reduce((i,items)=>i+items.amount,0)
  const navigate=useNavigate()
  let cartBox=<p><div className={classes.noCartMessage}>
    <h1>No items in cart</h1>
    <button className={classes.closeBtn} onClick={()=>dispatch(CartVisibleAction.closeCart())}>close</button>
  </div></p>
  //discount
  const total=totalAmount
  const disCount=total/100*20
  const totaDiscount=disCount

  const validDisCount=totalQuantity>=10
  const onApplyDiscount=()=>{
    if(validDisCount){
        
      setDisCountMessage('20% OFF Discount Applied')
        addDisCount(totaDiscount)
    }
  }
  const goToLogin=()=>{
    dispatch(CartVisibleAction.closeCart())
    navigate('session?sess=login')
  
  }

  if(cartItems.length>0){
    cartBox=<div className={classes.CartCover}>
    <ul>
     {cartItems.map((item)=><CartItem
          key={item.id}
          id={item.id}
        title= {item.title}
         amount= {item.amount}
         image={item.image}
         totalAmount={totalAmount} 
          price= {item.price }
      />)}
    </ul>
    </div>
  }
  useEffect(()=>{
    if(totalAfterDisCount===null){
      setDisCountMessage('')
    }
  },[totalAfterDisCount])
  

  const displayCheckOut=cartItems.length>0

  
  return (
    ReactDom.createPortal(
<React.Fragment>
 <BackDrop onClick={()=>dispatch(CartVisibleAction.closeCart())}/>
   <CartCover className={`${classes.cart} ${cartItems.length===0 && classes.cartHeight}`}>
    <div className={classes.cartHeadItem}>
    <h2>Your Shopping Cart</h2>
      <h2 className={`${classes.disCount} font-mono font-bold`}>{disCountMessage}</h2>
    </div>
   
{cartBox}
<div className={classes.cartTotalItems}>
  <div className={classes.cartTotal}>
    <div className={classes.totalCartPrice}>
    <h2>Total:</h2>
<div><h2 className={classes.totalA}> ${totalAfterDisCount!==null?totalAfterDisCount.toFixed(2):totalAmount.toFixed(2)}</h2>
</div>

{totalAfterDisCount!==null&&<p className={classes.cancelledAmount}>${totalAmount.toFixed(2)}</p>}
    </div>

  </div>
  {displayCheckOut&& validDisCount &&(<button className={classes.applyDiscBtn} onClick={onApplyDiscount} disabled={disCountMessage!=='' || totalAfterDisCount!==null}>APPLY DISCOUNT</button>)}
  {displayCheckOut&&<button onClick={goToLogin}>CHECKOUT</button>}
</div>
 <h2 className={classes.disCountonMob}>{disCountMessage}</h2>
    </CartCover>
    </React.Fragment>,document.getElementById('modal')
    )
  );
};

export default Cart;
