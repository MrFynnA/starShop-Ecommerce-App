
import React,{useState,useCallback} from "react"


const useHttps=(applyData)=>{
    const[isLoading,setIsLoading]=useState()
    const[error,setError]=useState(false)
       
    const requestData=useCallback(async(requestItem,abortSignal,searchTerm,category)=>{
        console.log(category)
        setError(null)
        try{
             setIsLoading(true)
            let url=requestItem.url
            if(searchTerm){
                url+=`/search?q=${searchTerm}`
            }
            if(searchTerm===null && category===null)
            {
                url+=`?limit=100`

            }
            if(category){
                url+=`/category/${category}`
            }
         
            const res=await fetch(url,{
                signal:abortSignal,
                method:requestItem.method ? requestItem.method :'GET',
                body:requestItem.body?requestItem.body:null,
                headers:requestItem.headers ? requestItem.headers:{}
            })
            if(!res.ok){
                throw new Error('404 ERROR could not retrive data')
            }
            const data=await res.json()
            applyData(data)
            setIsLoading(false)

         }catch(error){
            setError(error.message)
            setIsLoading(false)
         }
    },[applyData])

    return{
        isLoading,
        error,
        requestData
    }

}
export default useHttps