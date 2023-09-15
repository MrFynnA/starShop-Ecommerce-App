import { redirect } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebse-config';

export const action=async()=>{
    try{
        await signOut(auth)

    }catch(error){
    }
    localStorage.removeItem('localId_token')
    return redirect('/')
    }
  
