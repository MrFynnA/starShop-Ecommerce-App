import classes from './CartButton.module.css';
import CartIcon from '../UI/Cart-Icon';
import CartContext from '../CartContext/CartContext';
import { useContext,useState,useEffect } from 'react';
import{useDispatch,useSelector} from 'react-redux'
import { CartVisibleAction } from '../store/redStore';
import { Navigate, useNavigate } from 'react-router-dom';
import Cart from './Cart'

const CartButton = (props) => {
  

  const navigate=useNavigate()
  const cartVisibility=useSelector(state=>state.visibility.cartVisibility)
  
  const onViewCart=()=>{
    dispatch(CartVisibleAction.onCartVisible())
  }
  const ctx=useContext(CartContext)
  const{cartItems}=ctx
  const totalItemNumber=cartItems.reduce((a,items)=>a+items.amount,0)
  const [changed,setChanged]=useState(false)

  useEffect(()=>{
    if(totalItemNumber>0){
      setChanged(true)
    }
        setTimeout(()=>{
         setChanged(false)
        },500)

  },[totalItemNumber])
const dispatch=useDispatch()
  return (
    <>
       {cartVisibility && <Cart/>}
    <button onClick={onViewCart} className={`${classes.button}`}>
      {/* <span>My Cart</span> */}
      {/* <span className={classes.badge}>1</span> */}
      <span cartamount={totalItemNumber} className={`${classes.cartIconBtn} ${changed && 'animate-ping-fast'}`}><CartIcon/></span>
      <h4 className={classes.cartHeading}>cart</h4>
    </button>
    </>

  );
};

export default CartButton;
