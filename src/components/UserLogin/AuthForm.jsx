import styles from './AuthForm.module.css'
import MyButton from '../UI/Button'
import { Visible } from '../UI/VisibleEyes'
import { NotVisible } from '../UI/VisibleEyes'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { signUpAction } from '../store/slices/SignUpSlice'
import { useSubmit } from 'react-router-dom'


const AuthForm=(props)=>{
    const dispatch=useDispatch()
    const [buttonText,setButtonText]=useState()
    const [checked,setChecked]=useState(false)
    const[visible,setVisibility]=useState('password')
    const[searchParam]=useSearchParams()
    const[slideRight,setSlideRight]=useState(false)
    const[redbarColor,setRedBarColor]=useState(null)
    const[yellowbarColor,setYellowBarColor]=useState(null)
    const[greenbarColor,setGreenBarColor]=useState(null)
    const[capacity,setCapacityText]=useState(null)
    const session=searchParam.get('sess')
    const nexForm=useSelector(state=>state.signUp.nextSignUpForm)
    const submit=useSubmit()
    const emailRef=useRef(null)
    const passwordRef=useRef(null)
    const rePasswordRef=useRef(null)
    const firsnameRef=useRef(null)
    const LastnameRef=useRef(null)
//submitting userData

const submitUserData=()=>{
        const userData={
            // email:emailRef?.current.value,
            // password:passwordRef?.current.value,
            // rePassword:rePasswordRef?.current.value,
            firstname:firsnameRef?.current.value,
            lastname:LastnameRef?.current.value
        }
        console.log(userData)

        // if(userData.email.trim()==='' && userData.password.trim()==='' && userData.rePassword.trim()==='' && userData.firstname.trim()==='' &&  userData.lastname.trim()===''){
        //     return
        // }
        submit({data:userData},{method:'POST'})
    }

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
          setGreenBarColor(null)
          setYellowBarColor(null)
          setRedBarColor(null)  
          setCapacityText(null)
          setChecked(false) 
          setVisibility('password')
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

      const onGetPassword=(event)=>{
        if((event.target.value.trim().length<=25 && event.target.value.trim().search(/[A-Z]/)<0) || (event.target.value.trim().length<6 && /[A-Z]/.test(event.target.value.trim()))){
           setRedBarColor(styles.redBarColor)
           setYellowBarColor(null)
           setGreenBarColor(null)
           setCapacityText('weak')
           
        }
        if((event.target.value.trim().length>=8 && /[A-Z]/.test(event.target.value.trim())) || (event.target.value.trim().length>=8 && /[1-9]/.test(event.target.value.trim()))){
            setYellowBarColor(styles.yellowBarColor)
            setRedBarColor(null)
            setGreenBarColor(null)
            setCapacityText('good')
        }
        if((event.target.value.trim().length>=8 && /[A-Z]/.test(event.target.value.trim()) && /[1-9]/.test(event.target.value.trim())) || (event.target.value.trim().length>=20 && /[A-Z]/.test(event.target.value.trim())) || event.target.value.trim().length>25){
            setGreenBarColor(styles.greenBarColor)
            setYellowBarColor(null)
            setRedBarColor(null)
            setCapacityText('strong')
        }
        if(event.target.value.trim().length===0){
            setGreenBarColor(null)
            setYellowBarColor(null)
            setRedBarColor(null)  
            setCapacityText(null)  
        }
      }

const visibleStatus=visible==='password'? <NotVisible onClick={()=>setVisibility('text')}/>:<Visible onClick={()=>setVisibility('password')}/>
  
return(
    <form onSubmit={props.onsubmit}>
        <div className={styles.overralLoginForm}>
        
            {!nexForm && <div className={`${styles.innerLoginForm} ${slideRight && styles.slideRight}`}>
            <div className={styles.loginForm}>
        <div>
            <label htmlFor="Email">Email:</label>
       <span className={styles.formInput}><input type="email" ref={emailRef} placeholder='Email' id="email"/></span>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
      <span className={styles.formInput}><input ref={passwordRef} type={visible} placeholder='Password' id="password" onChange={onGetPassword}/>{visibleStatus}</span> 
     {!isLogin && <div className='flex justify-between items-center h-2  mt-4 px-2'>
        <div className='flex justify-start items-center gap-2'>
        <div className={`${redbarColor} ${yellowbarColor} ${greenbarColor} w-16 h-1 rounded-md`}></div>
        <div className={`${yellowbarColor} ${greenbarColor} w-16 h-1 rounded-md`}></div>
        <div className={`${greenbarColor} w-16 h-1 rounded-md`}></div>
        </div>
        <div className='text-[12px]'>{capacity}</div>
      </div>}
        </div>
       {!isLogin && <div className='mt-[-0.5rem] max-md:mt-[-0.4rem]'>
            <label htmlFor="password">Re-enter Password:</label>
      <span className={styles.formInput}><input type={visible} ref={rePasswordRef} placeholder='Repeat Password' id="password"/>{visibleStatus}</span> 
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
            {nexForm && <p className='text-center font-bold italic text-sm'>Let us know your name...</p>}

            <div className={styles.loginForm}>
   
        <div>
            <label htmlFor="Fisrt Name">First Name:</label>
       <span className={styles.formInput}><input ref={firsnameRef} type="text" placeholder='First name' id="firstname"/></span>
        </div>
        <div>
            <label htmlFor="Last Name">Last Name:</label>
       <span className={styles.formInput}><input type="text" ref={LastnameRef} placeholder='Last name' id="lastname"/></span>
        </div>
        </div>
        <div className={`${styles.actions} ${!isLogin && styles.actionSpace} flex items-center justify-center gap-6`}>
         <MyButton onClick={submitUserData} disabled={checked===false} backgroundcolor={'black'} textcolor={'white'} type={'button'}>{nexForm?'SIGNUP':""}</MyButton>
         <MyButton onClick={goBackToFirstSignUpForm} backgroundcolor={'black'} textcolor={'white'} type={'button'}>{nexForm?'BACK':""}</MyButton>
        </div>
        <div className='flex items-center justify-center gap-2 mt-10 max-md:mt-10 max-md:gap-[0px]'>
        <input className='w-6' type='checkbox' checked={checked===true} onChange={setCheckedValue}></input>
        <div className='max-md:text-[12px]'>I agree to the terms and conditions.</div>
            </div>
            </div>}
      
        </div>
      
    </form>
)
}

export default AuthForm