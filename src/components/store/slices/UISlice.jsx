import { createSlice } from "@reduxjs/toolkit"



const uiSlice=createSlice({
    name:'UI',
    initialState:{
        menuDisplay:false,
        allVisibleStatus:true
    },
    reducers:{
        ondisplayMenu(state){
           state.menuDisplay=!state.menuDisplay
        },
        onCloseMenu(state){
           state.menuDisplay=false
        },
        setAllVisibleStatus(state,action){
         state.allVisibleStatus=action.payload
        }
    }
})


export const uiActions=uiSlice.actions

export default uiSlice.reducer