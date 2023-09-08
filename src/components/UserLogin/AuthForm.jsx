import styles from './AuthForm.module.css'
import MyButton from '../UI/Button'
import { Visible } from '../UI/VisibleEyes'
import { NotVisible } from '../UI/VisibleEyes'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'



const AuthForm=(props)=>{
    const[visible,setVisibility]=useState('password')
    const[searchParam]=useSearchParams()
    // console.log(visible)
    const isLogin=searchParam.get('sess')==='login'


const visibleStatus=visible==='password'? <NotVisible onClick={()=>setVisibility('text')}/>:<Visible onClick={()=>setVisibility('password')}/>
  
return(
    <form onSubmit={props.onsubmit}>
        <div className={styles.overralLoginForm}>
            <div className={styles.innerLoginForm}>
            <div className={styles.loginForm}>
   
        <div>
            <label htmlFor="Email">Email/ Phone Number:</label>
       <span className={styles.formInput}><input type="email" placeholder='Email/ Phone#' id="email"/></span>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
      <span className={styles.formInput}><input type={visible} placeholder='Password' id="password"/>{visibleStatus}</span> 
        </div>
       {!isLogin && <div>
            <label htmlFor="password">Re-enter Password:</label>
      <span className={styles.formInput}><input type={visible} placeholder='Repeat Password' id="password"/>{visibleStatus}</span> 
        </div>}
        </div>
        <div className={`${styles.actions} ${!isLogin && styles.actionSpace}`}>
         <MyButton backgroundcolor={'black'} textcolor={'white'} type={'button'}>{isLogin ?'LOGIN':'SIGNUP'}</MyButton>
        </div>
        <div className='flex items-center justify-center relative top-4 gap-2'>
            {isLogin && <div>Don't have an account yet?</div>}
         <Link to={`?sess=${isLogin ?'signup' :'login'}`} className={`${styles.creatAcc} underline`}>{isLogin?'create account':''}</Link>
        </div>
            </div>
      
        </div>
      
    </form>
)
}

export default AuthForm