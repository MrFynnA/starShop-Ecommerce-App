import styles from './AuthForm.module.css'
import MyButton from '../UI/Button'
import { Visible } from '../UI/VisibleEyes'
import { NotVisible } from '../UI/VisibleEyes'
import {useState } from 'react'
import {
    useSearchParams,
    useActionData,
    useNavigation,
    Form,
    Link, 
    redirect,
useNavigate  } from 'react-router-dom'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { signUpAction } from '../store/slices/authSlice'
import { auth } from '../../config/firebse-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { emailCheck } from '../util/util'
import { passwordCheck } from '../util/util'
import { checkPasswordEquality } from '../util/util'
import { SuccessSign } from '../UI/SuccessSign'

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
    const[email,setEmail]=useState('')
    const[firstname,setfirstName]=useState('')
    const[lastname,setlastName]=useState('')
    const[password,setPassword]=useState('')
    const[repassword,setrePassword]=useState('')
    const[EmailTouched,setEmailTouched]=useState(false)
    const[firstnameTouched,setfirstnameTouched]=useState(false)
    const[lastnameTouched,setlastnameTouched]=useState(false)
    const[submitTouched,setSubmitTouched]=useState(false)
    const[EmailError,setEmailError]=useState(false)
    const[PasswordError,setPasswordError]=useState(false)
    const[passwordTouched,setPasswordTouched]=useState(false)
    const[repasswordTouched,setrePasswordTouched]=useState(false)
    const[returnedErrorMessage,setReturnedErrorMessage]=useState('')
    const data=useActionData()
    const navigation=useNavigation()
    const navigate=useNavigate()
    const allVisibleStat= useSelector(state=>state.uiDisplay.allVisibleStatus)

    
    const nexForm=useSelector(state=>state.signUp.nextSignUpForm)
    const successMessage=useSelector(state=>state.signUp.successfulmessage)
    const errorMessage=useSelector(state=>state.signUp.errormessage)
    const emailError=data && data.error
    const passwordError=data && data.error
    const wrongCredentials=data && data.errorCred
    const resLoading=props.reponseLoading

    
    const submitting=navigation.state==='submitting'

    //checking for error message returned
    useEffect(()=>{
          if(errorMessage?.includes('email-already')){
            setReturnedErrorMessage('email exist already')
          }
          if(errorMessage?.includes('missing-email')){
            setReturnedErrorMessage('re-enter email again')
            
          }
          if(errorMessage?.includes('password')){
            setReturnedErrorMessage('Password should be atleast 6 characters')
          }
    },[errorMessage])

    //to clear error when user starts typing again
    useEffect(()=>{
        if(data && data.emailMessage?.includes('valid')){
            setEmailError(true)
        }
        if(data && data.passwordMessage?.includes('valid')){
            setPasswordError(true)
        }

    },[data])


    useEffect(()=>{
if(successMessage){
    setReturnedErrorMessage('')
    dispatch(signUpAction.geterrorMessage(null))
    setTimeout(()=>{
        dispatch(signUpAction.onCloseFinalSignUpForm())
        setVisibility('password')
        setChecked(false)
        navigate('/session?sess=login')
        dispatch(signUpAction.getsuccessfulMessage(null))
    },2200)

    
}
    },[successMessage,dispatch,navigate])

    useEffect(()=>{
        if(!allVisibleStat){
             setVisibility('password')
        setChecked(false)
        setSubmitTouched(false)
}
  },[allVisibleStat,dispatch])
   

    const isLogin=searchParam.get('sess')==='login'

    useEffect(()=>{

        if(isLogin){
            setButtonText('LOGIN')
        }else{
            setButtonText('CONTINUE')
        }
    },[isLogin])
    
    const firstnameValid=firstname.length!==0      
    const LastnameValid=lastname!==''      
    const correctEmail=emailCheck(email)
    const correctPassword=passwordCheck(password)
    const correctPassword2=passwordCheck(repassword)
    const equalPasswords=checkPasswordEquality(password,repassword)
 const moveToNextForm=()=>{
    setEmailTouched(true)
    setfirstnameTouched(true)
    setlastnameTouched(true)
    if(buttonText==='CONTINUE'){
       

if(!firstnameValid || !LastnameValid || !correctEmail){
    return
}
        dispatch(signUpAction.onShowFinalSignUpForm())
        setPasswordTouched(false)
        setrePasswordTouched(false)
        setReturnedErrorMessage(null)
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
    dispatch(signUpAction.geterrorMessage(null))
    setSubmitTouched(false)
    setGreenBarColor(null)
    setReturnedErrorMessage(null)
          setYellowBarColor(null)
          setRedBarColor(null)  
          setCapacityText(null)
          setChecked(false) 
          setVisibility('password')
 }
//when i there's a change in navigation
    useEffect(()=>{
        setSlideRight(true)
        setfirstName('')
        setEmail('')
        setlastName('')
        setPassword('')
        setrePassword('')
        setfirstnameTouched(false)
        setEmailTouched(false)
        setlastnameTouched(false)
          
          setTimeout(()=>{
            
            setSlideRight(false)
          },500)
      },[session])

      const setCheckedValue=(event)=>{
     setChecked(prev=>!prev)
      }
//checking password strength
      const onGetPassword=(event)=>{
        setSubmitTouched(false)
        setPassword(event.target.value)
        setPasswordTouched(false)
        setrePasswordTouched(false) //so that on password being true after signUp is clicked we dont see an error saying repeat pssword, it should display only when you click on signup
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
  

//Getting input Values
const onGetEmail=(event)=>{
    setEmail(event.target.value)
    setEmailTouched(false)
    setEmailError(false)
   
}
const onGetfirstname=(event)=>{
    setfirstName(event.target.value)
    setfirstnameTouched(false)
    
    
}
const onGetlastname=(event)=>{
    setlastName(event.target.value)
    setlastnameTouched(false)
}

const onGetrePassword=(event)=>{
    setrePassword(event.target.value)
    setSubmitTouched(false)
    setrePasswordTouched(false)

}

//just to clear login password error when user typing
const ListenForPasswordChange=(event)=>{
    setPasswordError(false)
}



const submitData=()=>{
       

    if(!isLogin){
        setSubmitTouched(true)
        setPasswordTouched(true)
        setrePasswordTouched(true)
    }

    const userData={
        email:email,
        firstname:firstname,
        lastname:lastname,
        password:password,
        repassword:repassword
    }
    const passWordEqual=checkPasswordEquality(userData.password,userData.repassword)
    if(isLogin || !passWordEqual){
    dispatch(signUpAction.geterrorMessage(null))
    setReturnedErrorMessage('')
          return
        }

    props.userCred(userData)

}


return(
    <>
    <Form method='post' onSubmit={submitData}>
        <div className={`${styles.overralLoginForm}`}>
        
            {!nexForm && <div className={`${styles.innerLoginForm} ${slideRight && styles.slideRight}`}>
            {wrongCredentials && <div className='text-center font-bold italic text-[12px] text-red-600 border-2 border-red-300'>{data.message}</div>}
            <div className={styles.loginForm}>
         
           {submitting && <div className={`${styles.submitText} font-bold bottom-8 text-xl absolute text-[#04b1d4]`}>●</div>}

        
        <div>
            <label htmlFor="Email">Email:</label>
       <span className={`${styles.formInput} ${((EmailError && emailError && data.emailMessage)||(!isLogin && !correctEmail && EmailTouched)) && '!border-red-600' } relative`}><input type="email" name="email"  placeholder='Email' value={email} onChange={onGetEmail} id="email"/>
       <p className='text-[12px] absolute top-11 text-red-600'>{EmailError &&emailError && data.emailMessage}</p>
       {!isLogin && !correctEmail && EmailTouched && <p className='text-[12px] absolute top-11 text-red-600'>Please enter a valid email</p>}
       </span>
        </div>
        {isLogin && <div className='mt-2'>
            <label htmlFor="password">Password:</label>
      <span className={`${styles.formInput} ${PasswordError && passwordError && data.passwordMessage && '!border-red-600' } relative`}><input  name="password" type={visible} onChange={ListenForPasswordChange} placeholder='Password' id="password"/>{visibleStatus}
      <p className='text-[12px] absolute top-11 text-red-600'>{PasswordError && passwordError && data.passwordMessage}</p>
      </span> 
        </div>}
       {!isLogin && 
       <>
       <div>
            <label htmlFor="FisrtName">First Name:</label>
       <span className={`${styles.formInput} ${!isLogin && !firstnameValid && firstnameTouched && '!border-red-600' }`}><input value={firstname}  type="text" placeholder='First name' name='firstname' onChange={onGetfirstname} id="firstname"/>
       {!isLogin && !firstnameValid && firstnameTouched && <p className='text-[12px] absolute top-11 text-red-600'>Please enter a valid first name</p>}
       </span>
        </div>
        <div>
            <label htmlFor="LastName">Last Name:</label>
       <span className={`${styles.formInput}  ${!isLogin && !LastnameValid && lastnameTouched && '!border-red-600' }`}><input type="text" placeholder='Last name' name='lastname' onChange={onGetlastname} value={lastname} id="lastname"/>
       {!isLogin && !LastnameValid && lastnameTouched && <p className='text-[12px] absolute top-11 text-red-600'>Please enter a valid last name</p>}
       </span>
        </div>
       </>
        
        }
        </div>
        <div className={`${styles.actions} ${!isLogin && styles.actionSpace}`}>
         <MyButton onClick={moveToNextForm} disabled={submitting} backgroundcolor={'black'} textcolor={'white'} type={'submit'}>{buttonText}</MyButton>
        </div>
        <div className='flex max-md:!flex-col items-center max-md:text-sm justify-center relative top-4 gap-[0.2rem]'>
            {isLogin && <div>Don't have an account yet?</div>}
         <Link to={`?sess=${isLogin && 'signup'}`} className={`${styles.creatAcc} underline`}>{isLogin?'create account':''}</Link>
            </div>
        </div>}
        {nexForm && <div className={`${slideRight && styles.slideRight}`}>
           <div className='text-center font-bold italic text-sm relative top-2'>{successMessage ? <div className='flex justify-center items-center gap-2'><SuccessSign/><p className='text-green-700 font-sans'>Sign Up Successful</p></div>:'Lets get you on board...'}
           {(correctPassword || correctPassword2) && nexForm && correctPassword && submitTouched && !equalPasswords && <div className='text-center font-bold relative top-3 italic text-[12px] text-red-600 border-2 border-red-300'>Passwords do not match</div>}
           {returnedErrorMessage && <div className='text-center font-bold relative top-3 italic text-[12px] text-red-600 border-2 border-red-300'>{returnedErrorMessage}</div>}
           </div>

            <div className={styles.loginForm}>
            {!isLogin && resLoading && <div className={`${styles.submitText} font-bold max-md:bottom-[4rem] absolute bottom-16 text-xl text-[#04b1d4]`}>●</div>}
       
            <div>
            <label htmlFor="password">Password:</label>
      <span className={styles.formInput}><input  name="password" type={visible} placeholder='Password' value={password} id="password" onChange={onGetPassword}/>{visibleStatus}
      {!isLogin && !correctPassword && passwordTouched && <p className='text-[12px] absolute top-11 text-red-600'>Please enter a valid password</p>}
      </span> 
     <div className='flex justify-between items-center h-2  mt-4 px-2'>
        <div className='flex justify-start items-center gap-2'>
        <div className={`${redbarColor} ${yellowbarColor} ${greenbarColor} w-16 h-1 rounded-md`}></div>
        <div className={`${yellowbarColor} ${greenbarColor} w-16 h-1 rounded-md`}></div>
        <div className={`${greenbarColor} w-16 h-1 rounded-md`}></div>
        </div>
        <div className='text-[12px]'>{capacity}</div>
      </div>
        </div>
            <div className='mt-[-0.5rem] max-md:mt-[-0.4rem]'>
            <label htmlFor="passwordrepeat">Re-enter Password:</label>
      <span className={styles.formInput}><input type={visible} value={repassword} name="passwordrepeat"  placeholder='Repeat Password' onChange={onGetrePassword} id="passwordrepeat"/>{visibleStatus}
      {!isLogin && correctPassword && !correctPassword2 && repasswordTouched && <p className='text-[12px] absolute top-11 text-red-600'>Please repeat password</p>}
      </span> 
        </div>
       
        </div>
        <div className={`${styles.actions} ${!isLogin && styles.actionSpace} flex items-center justify-center gap-6`}>
         <MyButton disabled={checked===false} backgroundcolor={'black'} textcolor={'white'} type='submit'>{nexForm?'SIGNUP':""}</MyButton>
         <MyButton onClick={goBackToFirstSignUpForm} backgroundcolor={'black'} textcolor={'white'} type={'button'}>{nexForm?'BACK':""}</MyButton>
        </div>
        <div className='flex items-center justify-center gap-2 mt-10 max-md:mt-10 max-md:gap-[0px]'>
        <input className='w-6' type='checkbox' checked={checked===true} onChange={setCheckedValue}></input>
        <div className='max-md:text-[12px]'>I agree to the terms and conditions.</div>
            </div>
            </div>}
             </div>
             </Form>
            {/* final registeration step */}
            
            </>
)
}  



export default AuthForm


export const action=async({request,params})=>{
const requestData=await request.formData()
const userDetails={
    email:requestData.get('email'),
    password:requestData.get('password')

}
const searchParam=new URL(request.url).searchParams
const session=searchParam.get('sess')

   if(session==='login'){
    const correctEmail= emailCheck(userDetails.email)

     const correctPassword=passwordCheck(userDetails.password)

if(!correctEmail || !correctPassword ){
    return {error:true,
        emailMessage:!correctEmail?'Please enter a valid Email':null,
        passwordMessage:!correctPassword?'Please enter a valid password':null
}
  }
    try{
        const res=await signInWithEmailAndPassword(auth,userDetails.email,userDetails.password)
         
       localStorage.setItem('localId_token',res._tokenResponse.localId)
     
        return redirect('/')

    }catch(error){
         if(error.message.includes('network')){
            return{
                errorCred:true, message:'Please check network connection'
            }
         }
         return {
            errorCred:true, message:'Email or password is incorrect'
         }
    }

   }else if(session==='signup'){
    return null
   }else{
    setTimeout(()=>{

        return redirect('/')
    },10000)
   }
    
}