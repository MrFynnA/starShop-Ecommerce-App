import { createSlice } from "@reduxjs/toolkit"



const uiSlice=createSlice({
    name:'UI',
    initialState:{
        menuDisplay:false
    },
    reducers:{
        ondisplayMenu(state){
           state.menuDisplay=!state.menuDisplay
        },
        onCloseMenu(state){
           state.menuDisplay=false
        }
    }
})


export const uiActions=uiSlice.actions

export default uiSlice.reducer