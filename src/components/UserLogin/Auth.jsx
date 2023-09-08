import React from "react"
import AuthForm from "./AuthForm"
import classes from './Auth.module.css'
import Card from '../UI/Card'
import { useSearchParams } from "react-router-dom"

const AuthSection=()=>{
      const[searchParam]=useSearchParams()
      const isLogin=searchParam.get('sess')==='login'

    const onSubmit=()=>{

    }

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
    <AuthForm onsubmit={onSubmit}/>
        </Card>
        </div>
      
    </React.Fragment>
)
}
export default AuthSection

