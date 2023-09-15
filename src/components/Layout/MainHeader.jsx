import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import AccountIcon from '../UI/Account-icon';
import { Link,useNavigate } from 'react-router-dom';
import { Form } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { signUpAction } from '../store/slices/authSlice';
import UserAccount from '../Account/userAccount';
import { uiActions } from '../store/slices/UISlice';
import { useEffect } from 'react';


const MainHeader = (props) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const receivedTokenStatus=props.tokenId
  const allVisibleStat= useSelector(state=>state.uiDisplay.allVisibleStatus)
 


  const triggerCloseFinalForm=()=>{
       dispatch(signUpAction.onCloseFinalSignUpForm())
       navigate('session?sess=login')
       dispatch(uiActions.setAllVisibleStatus(false))
       
      }
      
      useEffect(()=>{
        if(!allVisibleStat){
          setTimeout(()=>{

            dispatch(uiActions.setAllVisibleStatus(true))
          },1000)
}
  },[allVisibleStat,dispatch])


  return (
    <header className={classes.header}>
      <div onClick={()=>navigate('/')} className={`text-4xl font-bold ${classes.SiteTitle}`}><h1>StarShopify</h1></div>
      <nav className='relative max-md:mr-6'>
        <ul className='flex items-center gap-5'>
          <span className={classes.LoginActions}> 
          <li>
          {!receivedTokenStatus && <button className='border-none hover:bg-transparent text-white right-[1rem] relative top-2 font-bold w-10 max-md:text-sm max-md:right-[1rem] outline-none' onClick={triggerCloseFinalForm}>LOGIN</button>}

          {receivedTokenStatus && <UserAccount/>}

          </li>
        {/* <li>
           <AccountIcon/>
          </li> */}
          </span>
        
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

