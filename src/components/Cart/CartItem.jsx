import classes from './CartItem.module.css';
import CartContext from '../CartContext/CartContext';
import { useContext } from 'react';


const CartItem = (props) => {

  const ctx=useContext(CartContext)
  const{onAddItem,onRemoveItem}=ctx
  const { title, amount, price ,image,id} = props;
  
  const existNewItem={
    ...props,
    amount:1
  }
  // console.log(existNewItem)
const addExistItem=()=>{
    onAddItem(existNewItem)
}
const deleteItem=()=>{
  onRemoveItem(existNewItem)
}

  return (
    <li className={classes.item}>
      <header className={classes.cartHeader}>
        <h3><span className={classes.stockBadge}>In Stock</span><br/>{title}</h3>
               <div className={classes.price}>
         <h4>${(price*amount.toFixed(2)).toLocaleString()}{' '}</h4> 
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.itemIMGPrice}>
        <img className={classes.CartImg} src={image} alt={title}/>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        </div>
      
        <div className={classes.actions}>
          <button onClick={deleteItem}>-</button>
          <button onClick={addExistItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
