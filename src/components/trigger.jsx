import { useDispatch } from 'react-redux';
import { signUpAction } from './store/slices/SignUpSlice';


export const useTrigger=()=>{
    const dispatch=useDispatch()

    const triggerLastFormClose=()=>{
        dispatch(signUpAction.onCloseFinalSignUpForm)
    }

  return {
    triggerLastFormClose
}
}




