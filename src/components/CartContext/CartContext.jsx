import React from "react"


const CartContext=React.createContext({
    onAddItem:(item)=>{},
    onRemoveItem:(item)=>{},
    onRemoveItemTotally:(item)=>{},
    totalAmount:'',
    cartItems:[],
    addDisCount:(item)=>{},
    removeDiCcountDisCount:()=>{},
    totalAfterDisCount:'',
    replaceCart:(item)=>{},
    cartChanged:''
})

export default CartContext