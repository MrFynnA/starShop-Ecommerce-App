import {createSlice,configureStore} from '@reduxjs/toolkit'
import notification from './slices/noficationSlice'
import authSlice from './slices/authSlice'
import UISlice from './slices/UISlice'

const cartDataSlice=createSlice({
    name:'cartDataFromBackEnd',
    initialState:{
        cartItems:[],
        totalAmount:0,
        totalAfterDisCount:0
    },
    reducers:{
        onCartDataReceived(state,action){
     state.cartItems=action.payload.cartItems
     state.totalAmount=action.payload.totalAmount
     state.totalAfterDisCount=action.payload.totalAfterDisCount

       }
        }
    })
const initialState={
    cartVisibility:false,
  
}

const cartVisibilitySlice=createSlice({
    name:'cartReducer',
    initialState,
    reducers:{
        onCartVisible(state){
            state.cartVisibility=!state.cartVisibility
        },
        closeCart(state){
        state.cartVisibility=false
        },
       
    }
})
const initialSearchTerm={
    searchValue:null,
    category:null
}

// const searchTermSlice=createSlice({
// name:'Search',
// initialSearchTerm,
// reducers:{
//     receieveSearchTerm(state,action){
//  state.searchValue=action.payload
//     }
// }
// })

const searchReducer=(state,action)=>{
   switch(action.type){
    case searchAction.UPDATETERM:
        return{
        searchValue:action.payload,
        category:null
        }

        case searchAction.UPDATECategory:
            return {
                category:action.payload,
                searchValue:null
            }
        default:return initialSearchTerm
   }
}

export const CartVisibleAction=cartVisibilitySlice.actions
export const cartDataAction=cartDataSlice.actions
export const searchAction={
    UPDATETERM:'updateTerm',
    UPDATECategory:"updateCategory"

}

const store=configureStore({
    reducer:{
        visibility:cartVisibilitySlice.reducer,
        searchTerm:searchReducer,
        notify:notification,
        cartData:cartDataSlice.reducer,
        signUp:authSlice,
        uiDisplay:UISlice
    }
})

export default store