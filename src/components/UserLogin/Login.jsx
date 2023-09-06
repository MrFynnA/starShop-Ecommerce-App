import React from "react"
import LoginForm from "./LoginForm"
import classes from './Login.module.css'
import Card from '../UI/Card'

const LoginSection=()=>{

    const onSubmit=()=>{

    }

return (
    <React.Fragment>
        <div className={classes.loginBox}>
        <h2 style={{textAlign:'center'}}>Get the coolest Prices of your favorite products on Star Shopify and enjoy AmazinG OFFERS.</h2>
        <Card 
        minwidth={'40%'} 
        backgroundcolor={'rgb(0, 137, 164)'} 
        borderradius={'10px'}
        className={classes.MainForm}>
            <h3 className={classes.loginTitle}>STAR SHOPIFY <sub>Login</sub></h3>
    <LoginForm onsubmit={onSubmit}/>
        </Card>
        </div>
      
    </React.Fragment>
)
}
export default LoginSection

