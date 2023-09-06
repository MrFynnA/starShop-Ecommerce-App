import {createSlice,configureStore} from '@reduxjs/toolkit'
import notification from './slices/UI-Slice'

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
    cartVisibility:false
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
        }
    }
})
const initialSearchTerm={
    searchValue:null
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
        searchValue:action.payload
        }
        default:return initialSearchTerm
   }
}

export const CartVisibleAction=cartVisibilitySlice.actions
export const cartDataAction=cartDataSlice.actions
export const searchAction={
    UPDATETERM:'updateTerm'
}

const store=configureStore({
    reducer:{
        visibility:cartVisibilitySlice.reducer,
        searchTerm:searchReducer,
        notify:notification,
        cartData:cartDataSlice.reducer
    }
})

export default store