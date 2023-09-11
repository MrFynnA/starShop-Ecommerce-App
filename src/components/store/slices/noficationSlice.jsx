import {createSlice} from '@reduxjs/toolkit'


 const notificationInitial={
    requestMessage:null
}

const notificationSlice=createSlice({
    name:'notification',
    initialState:notificationInitial,
    reducers:{
        onsetNotification(state,action){
            state.requestMessage=state.requestMessage={
                title:action.title,
                description:action.description
            }
        }
    }
})

export const notificationActions=notificationSlice.actions.onsetNotification


export default notificationSlice.reducer