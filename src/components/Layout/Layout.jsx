import { Fragment } from 'react';
import MainHeader from './MainHeader';
import classes from './MainHeader.module.css'
import Offertag from '../UI/OfferTag';
import Footer from './MainFooter';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { uiActions } from '../store/slices/UISlice';
import { useSearchParams } from 'react-router-dom';

const Layout = (props) => {
const token=useLoaderData()
console.log(token)
const dispatch=useDispatch()
const userMenu=useSelector(state=>state.uiDisplay.menuDisplay)
const [URLsearchParams]=useSearchParams()
const session=URLsearchParams.get('sess')

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
{!session && <div className='bg-black relative  h-[60vh] max-md:h-[90vh] mb-!0 text-white mt-10 pt-4'>
  <div className='bg-[#00c2e9] h-[20%] mb-4'></div>
  <div>
  <div className={'text-4xl font-bold p-4 text-center'}>StarShopify</div>
  <div className={`${classes.mainlinkBox} flex max-md:flex-col max-md:gap-10 items-center justify-center gap-60 relative top-10`}>

  <ul className='px-4 flex flex-col max-md:items-center items-start justify-center gap-2'>
    <div className='font-bold text-lg mb-2 border-b-2'>Need Help?</div>
    <li><Link>Help center</Link></li>
    <li><Link>Chat with us</Link></li>
    <li><Link>Call to place order</Link></li>
  </ul>
  <ul className='px-4 flex flex-col max-md:items-center items-start justify-center gap-2'>
    <div className='font-bold text-lg mb-2 border-b-2'>About StarShopify</div>
    <li><Link>About Us</Link></li>
    <li><Link>Contact Us</Link></li>
    <li><Link>Terms and conditions</Link></li>
  </ul>

  </div>

  </div>
  </div>}
    </Fragment>
  );
};

export default Layout;
