import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import AccountIcon from '../UI/Account-icon';
import { Link,useNavigate } from 'react-router-dom';
import { Form } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../store/slices/SignUpSlice';


const MainHeader = (props) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()


  const triggerCloseFinalForm=()=>{
       dispatch(signUpAction.onCloseFinalSignUpForm())
       navigate('session?sess=login')
  
  }
  return (
    <header className={classes.header}>
      <div onClick={()=>navigate('')} className={`text-4xl font-bold ${classes.SiteTitle}`}><h1>StarShopify</h1></div>
      <nav>
        <ul>
          <span className={classes.LoginActions}> 
          <li>
          <button className='border-none hover:bg-transparent text-white right-[1rem] relative top-2 font-bold w-10 max-md:text-sm max-md:right-[1rem] outline-none' onClick={triggerCloseFinalForm}>LOGIN</button>

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
