


const getToken=()=>{
       const tokenuserToken=  localStorage.getItem('localId_token')
       return tokenuserToken
}


export const tokenLoader=()=>{
   return getToken()
}




