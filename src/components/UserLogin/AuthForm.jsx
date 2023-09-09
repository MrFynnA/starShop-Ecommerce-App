import styles from './AuthForm.module.css'
import MyButton from '../UI/Button'
import { Visible } from '../UI/VisibleEyes'
import { NotVisible } from '../UI/VisibleEyes'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { signUpAction } from '../store/slices/SignUpSlice'


const AuthForm=(props)=>{
    const dispatch=useDispatch()
    const [buttonText,setButtonText]=useState()
    const [checked,setChecked]=useState(false)
    const[visible,setVisibility]=useState('password')
    const[searchParam]=useSearchParams()
    const[slideRight,setSlideRight]=useState(false)
    const session=searchParam.get('sess')
    const nexForm=useSelector(state=>state.signUp.nextSignUpForm)
    console.log(nexForm)
    // console.log(visible)
    const isLogin=searchParam.get('sess')==='login'

    useEffect(()=>{

        if(isLogin){
            setButtonText('LOGIN')
        }else{
            setButtonText('CONTINUE')
        }
    },[isLogin])

 const moveToNextForm=()=>{
    if(buttonText==='CONTINUE'){
        dispatch(signUpAction.onShowFinalSignUpForm())
        setSlideRight(true)
        setTimeout(()=>{
            
            setSlideRight(false)
          },500)
    }
 }

 const goBackToFirstSignUpForm=()=>{
    dispatch(signUpAction.onCloseFinalSignUpForm())
    setSlideRight(true)
          
          setTimeout(()=>{
            
            setSlideRight(false)
          },500)
 }

    useEffect(()=>{
        setSlideRight(true)
          
          setTimeout(()=>{
            
            setSlideRight(false)
          },500)
      },[session])

      const setCheckedValue=(event)=>{
     setChecked(prev=>!prev)
      }
      console.log(checked)

const visibleStatus=visible==='password'? <NotVisible onClick={()=>setVisibility('text')}/>:<Visible onClick={()=>setVisibility('password')}/>
  
return(
    <form onSubmit={props.onsubmit}>
        <div className={styles.overralLoginForm}>
        
            {!nexForm && <div className={`${styles.innerLoginForm} ${slideRight && styles.slideRight}`}>
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
         <MyButton onClick={moveToNextForm} backgroundcolor={'black'} textcolor={'white'} type={'button'}>{buttonText}</MyButton>
        </div>
        <div className='flex items-center justify-center relative top-4 gap-2'>
            {isLogin && <div>Don't have an account yet?</div>}
         <Link to={`?sess=${isLogin ?'signup' :'login'}`} className={`${styles.creatAcc} underline`}>{isLogin?'create account':''}</Link>
        </div>
            </div>}
            {/* final registeration step */}
            {nexForm && <div className={`${styles.innerLoginForm} ${slideRight && styles.slideRight}`}>
            {nexForm && <p className='text-center font-bold italic text-sm'>last step...Let us know your name.</p>}

            <div className={styles.loginForm}>
   
        <div>
            <label htmlFor="Fisrt Name">First Name:</label>
       <span className={styles.formInput}><input type="text" placeholder='First name' id="firstname"/></span>
        </div>
        <div>
            <label htmlFor="Last Name">Last Name:</label>
       <span className={styles.formInput}><input type="text" placeholder='Last name' id="lastname"/></span>
        </div>
        </div>
        <div className={`${styles.actions} ${!isLogin && styles.actionSpace} flex items-center justify-center gap-6`}>
         <MyButton disabled={checked===false} backgroundcolor={'black'} textcolor={'white'} type={'button'}>{nexForm?'SIGNUP':""}</MyButton>
         <MyButton onClick={goBackToFirstSignUpForm} backgroundcolor={'black'} textcolor={'white'} type={'button'}>{nexForm?'BACK':""}</MyButton>
        </div>
        <div className='flex items-center justify-center gap-2 mt-5 max-md:mt-10 max-md:gap-[0px]'>
        <input className='w-6' type='checkbox' checked={checked===true} onChange={setCheckedValue}></input>
        <div className='max-md:text-[12px]'>I consent and agree to the terms and conditions.</div>
            </div>
            </div>}
      
        </div>
      
    </form>
)
}

export default AuthForm