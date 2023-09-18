import React,{useState} from "react"
import AuthForm from "./AuthForm"
import classes from './Auth.module.css'
import Card from '../UI/Card'
import { useSearchParams} from "react-router-dom"
import { auth } from "../../config/firebse-config"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useDispatch} from 'react-redux'
import { signUpAction } from "../store/slices/authSlice"

const AuthSection=()=>{
      const[searchParam]=useSearchParams()
      const isLogin=searchParam.get('sess')==='login'
      const dispatch=useDispatch()
      const[isLoading,setIsLoading]=useState(false)

    const onuserAuthOperation=async(userDetails)=>{
             const userSignUp={
                email:userDetails.email,
                password:userDetails.password
             }
                
             setIsLoading(true)
                 try{
                     const res=  await createUserWithEmailAndPassword(auth,userSignUp.email,userSignUp.password)
                  
                  dispatch(signUpAction.getsuccessfulMessage('Sign Up Successful'))      
                  setIsLoading(false)

                 }catch(error){
                   dispatch(signUpAction.geterrorMessage(error.message))
                   setIsLoading(false)
                 }

           
    }

return (
    <React.Fragment>
        <div className={`${classes.loginBox}  max-md:pb-[10rem]`}>
        <h2 style={{textAlign:'center'}} className="text-2xl font-bold mb-[-1rem] tracking-[spacing]">Get the coolest Prices of your favorite products on Star Shop and enjoy AmazinG OFFERS.</h2>
        <Card 
        minwidth={'40%'} 
        backgroundcolor={'rgb(0, 137, 164)'} 
        borderradius={'10px'}
        className={classes.MainForm}>
            <h3 className={classes.loginTitle}>STAR SHOP <sub className="font-mono font-bold text-lg">{isLogin?'Login':'SignUp'}</sub></h3>
    <AuthForm userCred={onuserAuthOperation} reponseLoading={isLoading}/>
        </Card>
        </div>
      
    </React.Fragment>
)
}
export default AuthSection






