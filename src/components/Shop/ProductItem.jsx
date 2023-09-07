import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import CartContext from '../CartContext/CartContext';
import { useContext } from 'react';
import CartIconCheck from '../UI/Cart-IconCheck';
import CartRemoveIcon from '../UI/Cartremove-Icon';



const ProductItem = (props) => {
  const ctx=useContext(CartContext)
  const{onAddItem,onRemoveItemTotally}=ctx
  const { title, price, description,image,id } = props;
  // console.log(price)

  const particularCartItems=props.cartItems.filter(item=>item.id===id)
  const newItemForRemoval={
    ...particularCartItems[0],
    price:particularCartItems.length>0 && particularCartItems[0].price*particularCartItems[0].amount
  }
  // console.log(newItemForRemoval)
  const cartItemsToReducer={
    id:id,
    title:title,
    price:price,
    description:description,
    image:image,
    amount:1
  }
  const sendItems=()=>{
onAddItem(cartItemsToReducer)
  }

 const removeItemTotal=()=>{
  onRemoveItemTotally(newItemForRemoval)
 }
let actions=<button onClick={sendItems}>Add to Cart</button>
  if(particularCartItems.length>0){
    actions=<div className={classes.cartChecked}><CartIconCheck/><h4>item added to cart</h4><div className={classes.removeCrt}><CartRemoveIcon onClick={removeItemTotal}/></div></div>
  }

  return (
    <Card className={classes.itemMain}>
        <div className={`${classes.item} ${particularCartItems.length>0&&classes['remove-p']}`}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <div className={classes.desAction}>
          <img src={image} alt={title}/>
        <p>{description}</p>
        <div className={classes.actions}>
          {actions}
        </div>
        </div>
      
    </div>
      </Card>
  );
};

export default ProductItem;
