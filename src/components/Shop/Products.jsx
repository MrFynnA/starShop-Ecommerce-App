import React,{useContext} from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
import CartContext from '../CartContext/CartContext';
import SearchActions from '../SearchActions/SeachActions';
import NoSearchIcon from '../UI/NoSearch-icon';
import{useSelector} from 'react-redux'
import BinoSearchIcon from '../UI/BinocSearch-icon';
import LoadingIcon from '../UI/Loading';
import ImageSlider from '../ImageSlider/ImageSlider';
import { sliderImages } from '../ImageSlider/sliderImages/images';
import Filter from '../SearchActions/Filter';




const Products = (props) => {
  // const itemss=useSelector(state=>state.cartData.totalAmount)
  // console.log(itemss)

  const searchTerm=useSelector(state=>state.searchTerm.searchValue)
  const category=useSelector(state=>state.searchTerm.category)
  const ctx=useContext(CartContext)
  const{onAddItem,cartItems,totalAmount}=ctx
  // const dummPro=[
  //   {
  //     id:1,
  //     title:'iphone 9',
  //     images:img,
  //     price:4000.0,
  //     description:'its the best'
  //   },
  //   {
  //     id:2,
  //     title:'iphone x',
  //     price:6000.0,
  //     description:'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...'
  //   },
  //   {
  //     id:3,
  //     title:'Samsung Universe 9',
  //     price:1249.00,
  //     description:'its the best'
  //   },
  //   {
  //     id:4,
  //     title:'OPPOF19',
  //     price:499.00,
  //     description:'OPPO F19 is officially announced on April 2021'

      
  //   },
  //   {
  //     id:5,
  //     title:'Huawei P30',
  //     price:4000.0,
  //     description:'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.'
  //   },
  //   {
  //     id:6,
  //     title:'pixel',
  //     price:4000.0,
  //     description:'pixels re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.'
  //   },
  //   {
  //     id:7,
  //     title:'iphone 12',
  //     price:600.0,
  //     description:'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...'
  //   },
  //   {
  //     id:8,
  //     title:'iphone 14',
  //     price:800.0,
  //     description:'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...'
  //   },
  // ]
  const products=props.productData
  products.length===100 && products.shift()

  // const newProducts=
  // console.log(newProducts)

  // let productsItems=dummPro
  // if(products.length!==0){
  //   productsItems=products
  // }
  let items=products.map(items=><ProductItem
  id={items.id}
   key={items.id}
    title={items.title}
    price={items.price}
    image={items.images}
    description={items.description}
    cartItems={cartItems}
  />)
  // console.log(props.error)
  // if(props.error && products===[]){
  //   items=<div className={classes.errorMessBox}><h1 style={{textAlign:'center'}}>{errorConnection}</h1><p style={{textAlign:'center'}}>{props.error}</p>
  //   <a href='/'><p style={{textAlign:'center'}}><button>Try Again</button></p></a>
  //   </div>
  // }
  if(products.length===0){
    items=<div className={classes.noSearchElements}>
        <BinoSearchIcon/>
        <div className={classes.nosearchFound}>
        <NoSearchIcon/>
        {(searchTerm!==null || category!==null) &&<h3 style={{textAlign:'center'}}>sorry there are no results {searchTerm &&`for "${searchTerm.slice(0,5)}${searchTerm.length>5 ? '...':''}"`}</h3>}
        {searchTerm===null && category===null && <p className={classes.interneterrorMsg}>Please check Internet Connection</p>}
        </div>
        {searchTerm!==null || category!==null ?<a href='/'><button>Back to Home</button></a>:<p style={{textAlign:'center'}}><button className={classes.tryAgainBtn} onClick={props.onTryAgain}>Try Again</button></p>}
        </div>
  }
  // <h2>Loading</h2>
  if(props.isLoading){
    items=<div className={`${classes.Loading} ${classes.spin}`}><LoadingIcon/></div>
  }
 
  
  return (
    <section className={classes.product}>
   
     {/* <div className={classes.saleImage}> */}
     {/* <img style={{width:'50%'}} src={SalesPic} alt='salespicture'/> */}
     
{/* <LoginSection/> */}
      <SearchActions/>
      {(searchTerm==='' || searchTerm===null) && (category==='' || category===null) && <div className={`${classes.sliderParent} relative max-lg:top-[-2rem]`}>
        <ImageSlider slider={sliderImages}/>
      </div>}
     {/* </div>  */}
     <div className='md:hidden'>

     <Filter/>
     </div>
     <div className='text-center mt-1 bg-slate-500 text-white py-4 text-xl italic mb-6 font-mono border-4 border-l-0 border-r-0 border-dashed border-blue-200'>
      <div className='max-md:text-sm'>Happy Shopping....Shop here and get Amazing discounts!</div>
     </div>
 <ul>
      {items}

 </ul>

    </section>
  );
};

export default Products;
