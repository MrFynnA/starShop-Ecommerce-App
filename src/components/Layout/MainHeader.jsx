import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import AccountIcon from '../UI/Account-icon';
import { Link,useNavigate } from 'react-router-dom';


const MainHeader = (props) => {
  const navigate=useNavigate()
  return (
    <header className={classes.header}>
      <div onClick={()=>navigate('')} className={`text-4xl font-bold ${classes.SiteTitle}`}><h1>StarShopify</h1></div>
      <nav>
        <ul>
          <span className={classes.LoginActions}> 
          <li>
          <Link to={'session?sess=login'}>LOG IN</Link>
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
