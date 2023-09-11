import { redirect } from "react-router-dom"
import { auth } from "../../config/firebse-config"
import { signOut } from "firebase/auth"



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







