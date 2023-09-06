import CartContext from "./CartContext"
import { useReducer } from "react"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const initialState={
    cartItems:[],
    totalAmount:0,
    totalAfterDisCount:null,
    cartChanged:false
 
}
const cartReducer=(state,action)=>{
    let totalAmount;
    switch(action.type){
        case 'addItem':
        totalAmount=state.totalAmount+action.item.price*action.item.amount
        const existingItem=state.cartItems.findIndex(item=>item.id===action.item.id)
        const existingCartItem=state.cartItems[existingItem]
        if(existingCartItem){
           const  updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount+action.item.amount
            }

            const upDatedCartItems=state.cartItems.map(item=>item.id!==updatedItem.id?item:updatedItem)


            // const upDatedCartItems=[
            //     ...state.cartItems
            // ]
            // upDatedCartItems[existingItem]=updatedItem
            return {
                cartItems:upDatedCartItems,
                totalAmount:totalAmount,
                totalAfterDisCount:null,
                cartChanged:true
            }
            
        }
        const cartItems=state.cartItems.concat(action.item)
        return{
            cartItems:cartItems,
            totalAmount:totalAmount,
            totalAfterDisCount:null,
            cartChanged:true
        }

        case 'deleteItem':
           totalAmount=state.totalAmount-action.items.price
           const existItem=state.cartItems.findIndex(item=>item.id===action.items.id)
           const itemInCart=state.cartItems[existItem]
           let upDateItemsONDelete
           if(itemInCart.amount!==1){
                const updatedItemD={
                     ...itemInCart,
                     amount:state.cartItems[existItem].amount-1
                 }
               
             
             upDateItemsONDelete=[
                 ...state.cartItems
             ]
             upDateItemsONDelete[existItem]=updatedItemD
                
           }else{
            upDateItemsONDelete=state.cartItems.filter(item=>item.id!==action.items.id)
           }
        return{
            cartItems:upDateItemsONDelete,
            totalAmount:totalAmount,
            totalAfterDisCount:null,
            cartChanged:true

        }
        case "removeItemTotally":
        totalAmount=state.totalAmount-action.item.price
      const  updatedcartItemsOnRemoval=state.cartItems.filter(item=>item.id!==action.item.id)
        return{
            cartItems:updatedcartItemsOnRemoval,
            totalAmount:totalAmount,
            totalAfterDisCount:null,
            cartChanged:true

        }
        case 'discountADD':
           

            return{
                cartItems:state.cartItems,
                totalAmount:state.totalAmount,
                totalAfterDisCount:state.totalAmount-action.discount,
                cartChanged:true

            }
            case 'replaceCart':
                return {
                    cartItems:action.cartIData.cartItems,
                    totalAmount:action.cartIData.totalAmount,
                    totalAfterDisCount:action.cartIData.totalAfterDisCount
                }
 
         default: return initialState 
    }
}


const CartProvider=(props)=>{
    const cartData=useSelector(state=>state.cartData)
    console.log(cartData)
   const[state,dispatch]=useReducer(cartReducer,initialState)
     const addItem=(items)=>{
        dispatch({type:'addItem',item:items})
       
     }
     const removeItem=(item)=>{
          dispatch({type:'deleteItem',items:item})
     }
     const removeItemTotally=(item)=>{
        console.log(item)
        dispatch({type:'removeItemTotally',item:item})
     }
     const addDiscount=(disCount)=>{
         dispatch({type:'discountADD',discount:disCount})
     }
     const removeDiscount=(items)=>{
         dispatch({type:'discountREMOVE',onRdiscountItems:items})
     }
    
     const replaceCartItems=(items)=>{
        dispatch({type:'replaceCart', cartIData:items})
     }

console.log(cartData.totalAmount)
useEffect(()=>{
    if(cartData.cartItems!==undefined||null){
        replaceCartItems({
              cartItems:cartData.cartItems,
              totalAmount:cartData.totalAmount ? cartData.totalAmount:0,
              totalAfterDisCount:cartData.totalAfterDisCount || null
        })
     }
},[cartData])
     
     
    console.log(state.totalAmount)
    const value={
        onAddItem:addItem,
        onRemoveItem:removeItem,
        onRemoveItemTotally:removeItemTotally,
        totalAmount:state.totalAmount,
        cartItems:state.cartItems,
        addDisCount:addDiscount,
        removeDiCcountDisCount:removeDiscount,
        totalAfterDisCount:state.totalAfterDisCount,
        replaceCart:replaceCartItems,
        cartChanged:state.cartChanged
    }

    return(
       <CartContext.Provider value={value}>
        {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider