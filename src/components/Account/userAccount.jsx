import { useState } from "react"
import AccountIcon from "../UI/Account-icon"
import { Link } from "react-router-dom"
import classes from './userAccount.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { uiActions } from "../store/slices/UISlice"
import DeliveryIcon from "../UI/Delivery"
import LogoutIcon from "../UI/Logout"
import { useSubmit } from "react-router-dom"

const UserAccount=()=>{
    const dispatch=useDispatch()
    const submit=useSubmit()
    const userMenu=useSelector(state=>state.uiDisplay.menuDisplay)
    const showuserMenu=()=>{
        dispatch(uiActions.ondisplayMenu())
    }
const logoutUser=()=>{
    submit(null,{method:'post', action:'logout'})
}
   

return <div>
    <div onClick={showuserMenu} className={`${classes.account} relative`}>
    <AccountIcon/>
    
    </div>
 
    {userMenu && <div className={`${classes.menu} absolute rounded-b-md bg-white right-49 w-32 top-14 max-md:top-12 border-2`}>
<ul className={`${classes.menulist} relative font-mono flex flex-col text-black text-[14px] justify-start gap-3`}>
    <li className="flex py-2 rounded-sm justify-center items-center gap-2 cursor-pointer hover:bg-slate-200">
        <DeliveryIcon/>
        <div className="relative top-1"><Link>Orders</Link></div>
        
    </li>
    <li className="">  
    <button onClick={logoutUser} className='flex justify-center gap-2 py-2  hover:bg-slate-200 rounded-sm border-none  hover:bg-transparent p-0 mr-0 ml-0 hover:text-black  text-black font-bold w-full max-md:text-sm outline-none' >
    <LogoutIcon/>
        Logout</button>
    </li>
</ul>
    </div>}
</div>

}
export default UserAccount