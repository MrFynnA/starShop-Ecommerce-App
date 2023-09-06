import styles from './LoginForm.module.css'
import MyButton from '../UI/Button'
import { Visible } from '../UI/VisibleEyes'
import { NotVisible } from '../UI/VisibleEyes'
import { useState } from 'react'



const LoginForm=(props)=>{
    const[visible,setVisibility]=useState('password')
    console.log(visible)


const visibleStatus=visible==='password'? <NotVisible onClick={()=>setVisibility('text')}/>:<Visible onClick={()=>setVisibility('password')}/>
  
return(
    <form onSubmit={props.onsubmit}>
        <div className={styles.overralLoginForm}>
            <div className={styles.innerLoginForm}>
            <div className={styles.loginForm}>
        <div>
            <label htmlFor="Email">Email:</label>
       <span className={styles.formInput}><input type="email" placeholder='Email address' id="email"/></span>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
      <span className={styles.formInput}><input type={visible} placeholder='Password' id="password"/>{visibleStatus}</span> 
        </div>
        </div>
        <div className={styles.actions}>
         <MyButton backgroundcolor={'black'} textcolor={'white'} type={'button'}>LOG IN</MyButton>
        </div>
         <p className={styles.creatAcc}>create an account</p>
            </div>
      
        </div>
      
    </form>
)
}

export default LoginForm