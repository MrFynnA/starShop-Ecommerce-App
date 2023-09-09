import {createSlice} from '@reduxjs/toolkit'


const initialFormState={
    nextSignUpForm:false
}

const signUpSlice=createSlice({
    name:'signUp',
    initialState:initialFormState,
    reducers:{
        onShowFinalSignUpForm(state){
            state.nextSignUpForm=true
       },
        onCloseFinalSignUpForm(state){
            state.nextSignUpForm=false
       }
    }
})


export const signUpAction=signUpSlice.actions

export default signUpSlice.reducer