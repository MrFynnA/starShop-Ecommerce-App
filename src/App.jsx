// import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
// import Products from './components/Shop/Products';
import fetchAction from './components/CartActions/fetchAction';
import { useCallback, useEffect,useState,useContext,useMemo, Children } from 'react';
import useHttps from './hooks/use-https';
import { useSelector,useDispatch } from 'react-redux';
import CartContext from './components/CartContext/CartContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthSection from './components/UserLogin/Auth';
import HomeProducts from './components/Shop/Products';
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
  console.log('hello')
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

    console.log('cartSent')
}
if(refreshPage===true){
  refreshPage=false
  return
}
if(cartChanged===true){
  senCartRequets().catch(error=>console.log(error))
}
},[cartItemsToBeSent,cartChanged])


  const searchTerm=useSelector(state=>state.searchTerm.searchValue)
  const category=useSelector(state=>state.searchTerm.category)
  // console.log(searchTerm)
  const[productData,setProductData]=useState([])
  // console.log(productData)
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
    console.log('running')
  }

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {index:true, element:<HomeProducts error={error} isLoading={isLoading} onTryAgain={tryAgain} productData={productData}/>},
        {path:'session', element:<AuthSection/>}
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



