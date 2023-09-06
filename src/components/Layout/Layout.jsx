import { Fragment } from 'react';
import MainHeader from './MainHeader';
import classes from './MainHeader.module.css'
import Offertag from '../UI/OfferTag';
import Footer from './MainFooter';
// import { Outlet } from 'react-router-dom';
// import Cart from '../Cart/Cart';
import Products from '../Shop/Products';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
  return (
    <Fragment>
  <div className={classes.topMessage}>
    <span className={classes.messageTop}><Offertag/> JOIN AMAZING OFFER,  Get 20% OFF 10 and above items purchase</span>
    </div>
      <MainHeader/>
      {/* <main>{props.children}</main> */}
      <main>
        
<Outlet/>
      </main>
<Footer/>
    </Fragment>
  );
};

export default Layout;
