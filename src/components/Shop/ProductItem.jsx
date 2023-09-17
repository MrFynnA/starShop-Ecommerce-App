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

  const particularCartItems=props.cartItems.filter(item=>item.id===id)
  const newItemForRemoval={
    ...particularCartItems[0],
    price:particularCartItems.length>0 && particularCartItems[0].price*particularCartItems[0].amount
  }
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
    actions=<div className='flex items-center justify-center gap-2 border-2 p-1 rounded-md border-orange-400 px-2'><CartIconCheck/><h4 className='text-[13px]'>item added to cart</h4><div className={classes.removeCrt}><CartRemoveIcon onClick={removeItemTotal}/></div></div>
  }

  return (
    // <Card className={classes.itemMain}>
    //     <div className={`${classes.item} ${particularCartItems.length>0&&classes['remove-p']}`}>
    //     <header>
    //       <h3>{title}</h3>
    //       <div className={classes.price}>${price.toFixed(2)}</div>
    //     </header>
    //     <div className={classes.desAction}>
    //       <img src={image} alt={title}/>
    //     <p>{description}</p>
    //     <div className={classes.actions}>
    //       {actions}
    //     </div>
    //     </div>
      
    // </div>
    //   </Card>
    <>
       <div className={`${classes.itemCard} bg-[white] relative flex flex-col justify-end p-4 rounded-lg border-[3px] max-md:border-4 max-md:border-[#00c2e9] border-dashed border-[black] hover:p-6`}>

        <div className={`w-[15rem] ${particularCartItems.length>0&&classes['remove-p']};`}>
        <header>
          <h3>{title}</h3>
        </header>
        <div className='flex flex-col mt-10 gap-3 items-start justify-end'>
          <img className='h-25 w-24'  src={image} alt={title}/>
          <div className={`${classes.price} font-extrabold bg-black text-white p-1 rounded-lg`}>${price.toFixed(2)}</div>
        <p>{`${description.slice(0,25)}....`}</p>
        <div className={`${classes.actions} mb-0`}>
          {actions}
        </div>
        </div>
    </div>
       </div>
    </>
    
  );
};

export default ProductItem;
