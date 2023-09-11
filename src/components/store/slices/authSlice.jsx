import {createSlice} from '@reduxjs/toolkit'


const initialFormState={
    nextSignUpForm:false,
    successfulmessage:null,
    errormessage:null,
    userToken:null

}

const authSlice=createSlice({
    name:'signUp',
    initialState:initialFormState,
    reducers:{
        onShowFinalSignUpForm(state){
            state.nextSignUpForm=true
       },
        onCloseFinalSignUpForm(state){
            state.nextSignUpForm=false
       },
       getsuccessfulMessage(state,action){
            state.successfulmessage=action.payload
       },
       geterrorMessage(state,action){
            state.errormessage=action.payload
       },
       onsetUserToken(state,action){
        state.userToken=action.payload
       },
       onremoveUserToken(state){
        state.userToken=null
       }
    }
})


export const signUpAction=authSlice.actions

export default authSlice.reducer