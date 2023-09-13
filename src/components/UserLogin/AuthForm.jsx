import styles from './AuthForm.module.css'
import MyButton from '../UI/Button'
import { Visible } from '../UI/VisibleEyes'
import { NotVisible } from '../UI/VisibleEyes'
import { useRef, useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import { useSearchParams,useActionData,useNavigation } from 'react-router-dom'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { signUpAction } from '../store/slices/authSlice'
import { useSubmit,Form,json } from 'react-router-dom'
import { auth } from '../../config/firebse-config'
import { signInWithEmailAndPassword } from 'firebase/auth'


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
    const[email,setEmail]=useState()
    const[firstname,setfirstName]=useState()
    const[lastname,setlastName]=useState()
    const[password,setPassword]=useState()
    const[repassword,setrePassword]=useState()
    const data=useActionData()
    const submit=useSubmit()
    const navigation=useNavigation()

    
    const nexForm=useSelector(state=>state.signUp.nextSignUpForm)
    const successMessage=useSelector(state=>state.signUp.successfulmessage)
    const emailError=data && data.error
    const passwordError=data && data.error
    const wrongCredentials=data && data.errorCred
    
    const submitting=navigation.state==='submitting'
//submitting userData

const submitUserData=()=>{

        // if(userData.email.trim()==='' && userData.password.trim()==='' && userData.rePassword.trim()==='' && userData.firstname.trim()==='' &&  userData.lastname.trim()===''){
        //     return
        // }
    
    }

    useEffect(()=>{
if(successMessage){
    setTimeout(()=>{
        dispatch(signUpAction.getsuccessfulMessage(null))
    },8000)
}
    },[successMessage])

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
//checking password strength
      const onGetPassword=(event)=>{
        setPassword(event.target.value)
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
}
const onGetfirstname=(event)=>{
    setfirstName(event.target.value)
    
}
const onGetlastname=(event)=>{
    setlastName(event.target.value)
    
}

const onGetrePassword=(event)=>{
    setrePassword(event.target.value)

}

const submitData=()=>{
    if(isLogin){
        return
    }


    const userData={
      email:email,
      firstname:firstname,
      lastname:lastname,
      password:password,
      repassword:repassword
    }

    props.userCred(userData)

}


return(
    <>
    <Form method='post' onSubmit={submitData}>
        <div className={styles.overralLoginForm}>
        
            {!nexForm && <div className={`${styles.innerLoginForm} ${slideRight && styles.slideRight}`}>
            {wrongCredentials && <div className='text-center font-bold italic text-[12px] text-red-600 border-2 border-red-300'>{data.message}</div>}
            <div className={styles.loginForm}>
           <div className='relative mb-[-1rem]'>
            {submitting && <div className={`${styles.submitText} font-bold max-md:bottom-[4rem] bottom-14 text-xl text-[#04b1d4]`}>●</div>}
           </div>
        
        <div>
            <label htmlFor="Email">Email:</label>
       <span className={`${styles.formInput} ${emailError && data.emailMessage && '!border-red-600' } relative`}><input type="email" name="email"  placeholder='Email' value={email} onChange={onGetEmail} id="email"/>
       <p className='text-[12px] absolute top-11 text-red-600'>{emailError && data.emailMessage}</p>
       </span>
        </div>
        {isLogin && <div className='mt-2'>
            <label htmlFor="password">Password:</label>
      <span className={`${styles.formInput} ${passwordError && data.passwordMessage && '!border-red-600' } relative`}><input  name="password" type={visible} placeholder='Password' id="password"/>{visibleStatus}
      <p className='text-[12px] absolute top-11 text-red-600'>{passwordError && data.passwordMessage}</p>
      </span> 
     {/* {!isLogin && <div className='flex justify-between items-center h-2  mt-4 px-2'>
        <div className='flex justify-start items-center gap-2'>
        <div className={`${redbarColor} ${yellowbarColor} ${greenbarColor} w-16 h-1 rounded-md`}></div>
        <div className={`${yellowbarColor} ${greenbarColor} w-16 h-1 rounded-md`}></div>
        <div className={`${greenbarColor} w-16 h-1 rounded-md`}></div>
        </div>
        <div className='text-[12px]'>{capacity}</div>
      </div>} */}
        </div>}
       {!isLogin && 
       <>
       <div>
            <label htmlFor="FisrtName">First Name:</label>
       <span className={styles.formInput}><input value={firstname}  type="text" placeholder='First name' name='firstname' onChange={onGetfirstname} id="firstname"/></span>
        </div>
        <div>
            <label htmlFor="LastName">Last Name:</label>
       <span className={styles.formInput}><input type="text" placeholder='Last name' name='lastname' onChange={onGetlastname} value={lastname} id="lastname"/></span>
        </div>
       </>
        
        }
        </div>
        <div className={`${styles.actions} ${!isLogin && styles.actionSpace}`}>
         <MyButton onClick={moveToNextForm} disabled={submitting} backgroundcolor={'black'} textcolor={'white'} type={'submit'}>{buttonText}</MyButton>
        </div>
        <div className='flex items-center justify-center relative top-4 gap-2'>
            {isLogin && <div>Don't have an account yet?</div>}
         <Link to={`?sess=${isLogin && 'signup'}`} className={`${styles.creatAcc} underline`}>{isLogin?'create account':''}</Link>
            </div>
        </div>}
        {nexForm && <div className={slideRight && styles.slideRight}>
           <div className='text-center font-bold italic text-sm'>{successMessage ? <p className='text-green-600'>Sign Up Successful</p>:'Lets get you on board...'}</div>

            <div className={styles.loginForm}>
            <div>
            <label htmlFor="password">Password:</label>
      <span className={styles.formInput}><input  name="password" type={visible} placeholder='Password' value={password} id="password" onChange={onGetPassword}/>{visibleStatus}</span> 
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
      <span className={styles.formInput}><input type={visible} value={repassword} name="passwordrepeat"  placeholder='Repeat Password' onChange={onGetrePassword} id="passwordrepeat"/>{visibleStatus}</span> 
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
    console.log('i run but failed')
const requestData=await request.formData()
const userDetails={
    email:requestData.get('email'),
    password:requestData.get('password')

}
//  const checkEmailwrong=touched && userDetails.email.trim()===''
const searchParam=new URL(request.url).searchParams
const session=searchParam.get('sess')

   if(session==='login'){

    console.log('nigga man')
    const correctEmail= userDetails.email.trim()!=='' && userDetails.email.trim().includes('.co') && (userDetails.email.trim().includes('@gmail') ||userDetails.email.trim().includes('@yahoo')||userDetails.email.trim().includes('@ymail'))

const correctPassword=userDetails.password!==''

if(!correctEmail || !correctPassword ){
    return {error:true,
        emailMessage:!correctEmail?'Please enter a valid Email':null,
        passwordMessage:!correctPassword?'Please enter a valid password':null
}
  }
  console.log('yessir boss')
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
    
    // const user={
    //     email:userDetails.get('email'),
    //     password:userDetails.get('password')
    // }
}