import React from "react"
import AuthForm from "./AuthForm"
import classes from './Auth.module.css'
import Card from '../UI/Card'
import { useSearchParams,redirect,useNavigate } from "react-router-dom"
import { auth } from "../../config/firebse-config"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useDispatch} from 'react-redux'
import { signUpAction } from "../store/slices/authSlice"

const AuthSection=()=>{
      const[searchParam]=useSearchParams()
      const isLogin=searchParam.get('sess')
      const navigate=useNavigate()
      const dispatch=useDispatch()

    const onuserAuthOperation=async(userDetails)=>{
             const userSignUp={
                email:userDetails.email,
                password:userDetails.password
             }
                
                 try{
                     const res=  await createUserWithEmailAndPassword(auth,userSignUp.email,userSignUp.password)
                     console.log(userSignUp.password)
                  
                  dispatch(signUpAction.getsuccessfulMessage('Sign Up Successful'))   
                  console.log(res._tokenResponse.localId)    
                  

                 }catch(error){
                    console.log(error.message)
                   dispatch(signUpAction.geterrorMessage(error.message))
                 }

           
    }

    // console.log(auth?.currentUser?.uid)

return (
    <React.Fragment>
        <div className={classes.loginBox}>
        <h2 style={{textAlign:'center'}} className="text-2xl font-bold tracking-[spacing]">Get the coolest Prices of your favorite products on Star Shopify and enjoy AmazinG OFFERS.</h2>
        <Card 
        minwidth={'40%'} 
        backgroundcolor={'rgb(0, 137, 164)'} 
        borderradius={'10px'}
        className={classes.MainForm}>
            <h3 className={classes.loginTitle}>STAR SHOPIFY <sub className="font-mono font-bold text-lg">{isLogin?'Login':'SignUp'}</sub></h3>
    <AuthForm userCred={onuserAuthOperation} />
        </Card>
        </div>
      
    </React.Fragment>
)
}
export default AuthSection






