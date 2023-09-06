import { notificationActions } from "../store/slices/UI-Slice"
import { cartDataAction } from "../store/redStore"


const fetchAction=()=>{
return async(dispatch)=>{
      const fetchData=async()=>{
        let url='https://ecommerceapp-starshopify-default-rtdb.firebaseio.com/cartItems.json'
       const res= await fetch(url)
       const data=await res.json()
       return data
      }

      try{
       const cartData= await fetchData()
       console.log(cartData)
         dispatch(cartDataAction.onCartDataReceived({
            cartItems:cartData.ItemsInCart,
            totalAmount:cartData.totalAmount,
            totalAfterDisCount:cartData.totalAfterDisCount || 0
        }))
      }catch(error){
         dispatch(notificationActions({title:'error',description:'cart retrieval not successful'}))
      }

}
}

export default fetchAction