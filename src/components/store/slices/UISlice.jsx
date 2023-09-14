import { createSlice } from "@reduxjs/toolkit"



const uiSlice=createSlice({
    name:'UI',
    initialState:{
        menuDisplay:false,
        selectDisplay:false
    },
    reducers:{
        ondisplayMenu(state){
           state.menuDisplay=!state.menuDisplay
        },
        onCloseMenu(state){
           state.menuDisplay=false
        },
        ondisplaySelect(state){
           state.selectDisplay=!state.selectDisplay
        },
        onCloseSelect(state){
           state.selectDisplay=false
        }
    }
})


export const uiActions=uiSlice.actions

export default uiSlice.reducer