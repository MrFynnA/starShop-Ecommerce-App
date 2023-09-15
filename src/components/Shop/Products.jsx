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
import { sideImages } from './sideProImages';




const Products = (props) => {

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

  let items=products.map(items=><ProductItem
  id={items.id}
   key={items.id}
    title={items.title}
    price={items.price}
    image={items.images}
    description={items.description}
    cartItems={cartItems}
  />)

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
      {(searchTerm==='' || searchTerm===null) && (category==='' || category===null) && 
      <div className='w-full flex justify-center items-top gap-1'>
        <div className={`${classes.images} w-[15%] overflow-y-scroll bg-[#6de0f7] text-center text-white mt-[-1rem] max-lg:hidden flex flex-col gap-8 items-center `}>
          <div className='flex h-[400px] pt-[9rem]  flex-col  gap-4 items-center justify-center w-[72%] mt-5'>
          {sideImages.map(items=><div key={items.id} className={classes.imageBox} imagetitle={items.title}><img className={`rounded-lg`} key={items.id} src={items.img[0]} alt={items.title}></img></div>)}
          </div>
        </div>
        <div className={`${classes.sliderParent} relative max-lg:top-[-2rem]`}>
      <ImageSlider slider={sliderImages}/>
      
    </div>
    <div className={`${classes.images} w-[15%] overflow-y-scroll bg-[#6de0f7] text-center text-white mt-[-1rem] max-lg:hidden flex flex-col gap-8 items-center `}>
          {/* <div className='w-full'>call to place order</div> */}
          <div className='flex h-[400px] pt-[9rem]  flex-col  gap-4 items-center justify-center w-[72%] mt-5'>
          {sideImages.map(items=><div key={items.id} className={classes.imageBox} imagetitle={items.title}><img className={`rounded-lg`} key={items.id} src={items.img[0]} alt={items.title}></img></div>)}
          </div>
        </div>
    </div>}
     <div className='md:hidden'>

     <Filter/>
     </div>
     <div className={`${classes.imagesSmallscreen} w-[100%] max-lg:overflow-x-scroll bg-[#6de0f7] text-center text-white
       mt-[-1rem] lg:hidden flex gap-8 items-center max-lg:mt-[-2rem] max-md:mt-0`}>
          <div className={`${classes.imageBoxSmallD}  flex gap-4 items-center justify-center h-[8rem] ml-2 mr-2  my-5 `}>
          {sideImages.map(items=><div key={items.id} className={classes.imageBox} imagetitle={items.title}><img className={`rounded-lg max-md:h-[6.8rem] max-lg:h-[8rem] w-full`} key={items.id} src={items.img[0]} alt={items.title}></img></div>)}
          </div>
        </div>
     <div className='text-center mt-1 bg-slate-500 text-white py-4 text-xl italic mb-6 font-mono border-4 border-l-0 border-r-0 border-dashed border-blue-200'>
      <div className='max-md:text-sm'>Happy Shopping....Shop here and get Amazing discounts!</div>
     </div>
 <ul>
      {props.error && props.error.includes('Failed to fetch')?(<div className={classes.noSearchElements}>
        <BinoSearchIcon/>
        <div className={classes.nosearchFound}>
        <NoSearchIcon/>
  <p className={classes.interneterrorMsg}>Please check Internet Connection</p>
        </div>
        <p style={{textAlign:'center'}}><button className={classes.tryAgainBtn} onClick={props.onTryAgain}>Try Again</button></p>
        </div>):items}

 </ul>

    </section>
  );
};

export default Products;
