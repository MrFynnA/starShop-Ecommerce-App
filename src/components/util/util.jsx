import { redirect } from "react-router-dom"

const getToken=()=>{
       const tokenuserToken=  localStorage.getItem('localId_token')
       return tokenuserToken
}


export const tokenLoader=()=>{
   return getToken()
}


export const checkTokenLoader=()=>{
    const token=getToken()
    if(token){
        return redirect('/')
    }else{
        return null
    }
}

export const emailCheck=(email)=>{
    const correctEmail= email.trim()!=='' && email.trim().includes('.co') && (email.trim().includes('@gmail') || email.trim().includes('@yahoo')||email.trim().includes('@ymail'))

    return correctEmail
}

export const passwordCheck=(password)=>{
    const correctPassword=password!==''
    return correctPassword
}

export const checkPasswordEquality=(firstPass,secondPass)=>{
    if(firstPass.trim()==='' && secondPass.trim()===''){
        return
    } 
        const equalPasswords=(firstPass.trim())===(secondPass.trim())
  
 return equalPasswords
}








