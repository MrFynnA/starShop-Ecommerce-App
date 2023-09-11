import { useState } from "react"
import AccountIcon from "../UI/Account-icon"
import { Link } from "react-router-dom"
import classes from './userAccount.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { uiActions } from "../store/slices/UISlice"

const UserAccount=()=>{
    const dispatch=useDispatch()
    const userMenu=useSelector(state=>state.uiDisplay.menuDisplay)
    const showuserMenu=()=>{
        dispatch(uiActions.ondisplayMenu())
    }

   

return <div>
    <div onClick={showuserMenu} className={`${classes.account} relative`}>
    <AccountIcon/>
    
    </div>
 
    {userMenu && <div className={`${classes.menu} absolute bg-white right-51 w-28 top-20 border-2`}>
<ul className={`${classes.menulist} relative flex flex-col text-black text-[14px] justify-start gap-1`}>
    <li>
        <Link>Orders</Link>
    </li>
    <li>
    <button className='border-none  hover:bg-transparent p-0 mr-0 ml-0 hover:text-black  text-black font-bold w-full max-md:text-sm outline-none' >Sign Out</button>
    </li>
</ul>
    </div>}
</div>

}
export default UserAccount