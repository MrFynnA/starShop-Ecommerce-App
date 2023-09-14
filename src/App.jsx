// import Cart from './components/Cart/Cart';
import { auth } from './config/firebse-config';
import Layout from './components/Layout/Layout';
// import Products from './components/Shop/Products';
import fetchAction from './components/CartActions/fetchAction';
import { useCallback, useEffect,useState,useContext,useMemo, Children } from 'react';
import useHttps from './hooks/use-https';
import { useSelector,useDispatch } from 'react-redux';
import CartContext from './components/CartContext/CartContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import AuthSection from './components/UserLogin/Auth';
import HomeProducts from './components/Shop/Products';
import { action } from './components/UserLogin/AuthForm';
import { tokenLoader } from './components/util/util';
import { action as signOutAction } from './components/UserLogin/LogoutUser';
import { checkTokenLoader } from './components/util/util';
import { searchAction } from './components/store/redStore';
import { lazy } from 'react';
import { Suspense } from 'react';
import { LoaderSpinner } from './components/UI/LoaderSpinner';
const AuthSection=lazy(()=>import('./components/UserLogin/Auth'))
// import SearchActions from './components/SearchActions/SeachActions';
let refreshPage=true
function App() {
  const dispatch=useDispatch()
  const ctx=useContext(CartContext)
  const{totalAmount,cartItems,totalAfterDisCount,cartChanged}=ctx


  const cartItemsToBeSent=useMemo(()=>{
return {
    ItemsInCart:cartItems,
    totalAmount,
    totalAfterDisCount
  }
},[cartItems,totalAmount,totalAfterDisCount])

//receivingCartData
useEffect(()=>{
dispatch(fetchAction())
},[dispatch])


//sending items to backend dataBase
  useEffect(()=>{
const senCartRequets=async()=>{
    const res=await fetch('https://ecommerceapp-starshopify-default-rtdb.firebaseio.com/cartItems.json',{
      method:'PUT',
      body:JSON.stringify(cartItemsToBeSent)
    })
    if(!res.ok){
      throw new Error("couldn't fetch")
    }

}
if(refreshPage===true){
  refreshPage=false
  return
}
if(cartChanged===true){
  senCartRequets().catch(error=>'')
}
},[cartItemsToBeSent,cartChanged])


  const searchTerm=useSelector(state=>state.searchTerm.searchValue)
  const category=useSelector(state=>state.searchTerm.category)
  const[productData,setProductData]=useState([])
  const applyData=useCallback((data)=>{
    const newData=data.products.map(data=>{
      return{
        id:data.id,
        title:data.title,
        brand:data.brand,
        category:data.category,
        description:data.description,
        price:data.price,
        images:data.images[0]

      }
    })
    setProductData(newData)
  },[])
  const{isLoading,error,requestData:itemRequest}=useHttps(applyData)

  useEffect(()=>{
    const AbortControl=new AbortController()
    const signal=AbortControl.signal
           itemRequest({url:'https://dummyjson.com/products'},signal,searchTerm,category)

           return()=>{
              AbortControl.abort()
           }
  },[itemRequest,searchTerm,category])

  const tryAgain=()=>{
    itemRequest({url:'https://dummyjson.com/products'})
    dispatch({type:searchAction.UPDATECategory,payload:null})

  }

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      id:'load_id2525',
      loader:tokenLoader,
      children:[
        {index:true, element:<HomeProducts error={error} isLoading={isLoading} onTryAgain={tryAgain} productData={productData}/>},
        {
          path:'logout',
        action:signOutAction},
        {path:'session', element:<Suspense fallback={<LoaderSpinner/>}><AuthSection/></Suspense>,
        action:action,
        loader:checkTokenLoader
      
      }
      ]
      
    
    }
  ])



  return (
    <RouterProvider router={router}/>
  // <Layout>
  //     <Cart/>
  //     <Products error={error} isLoading={isLoading} onTryAgain={tryAgain} productData={productData}/>
  //   </Layout>
  );
}

export default App;



