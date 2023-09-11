import { Fragment } from 'react';
import MainHeader from './MainHeader';
import classes from './MainHeader.module.css'
import Offertag from '../UI/OfferTag';
import Footer from './MainFooter';
import { Navigate, Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { uiActions } from '../store/slices/UISlice';

const Layout = (props) => {
const token=useLoaderData()
console.log(token)
const dispatch=useDispatch()
const userMenu=useSelector(state=>state.uiDisplay.menuDisplay)

const setMenuDisplay=()=>{
if(userMenu){

  dispatch(uiActions.onCloseMenu())
}
}



  return (
    <Fragment>
      <div onClick={setMenuDisplay}>
  <div className={classes.topMessage}>
    <span className={classes.messageTop}><Offertag/> JOIN AMAZING OFFER,  Get 20% OFF 10 and above items purchase</span>
    </div>
      <MainHeader tokenId={token}/>
   
      <main>
        
<Outlet/>
      </main>
<Footer/>
      </div>
    </Fragment>
  );
};

export default Layout;
