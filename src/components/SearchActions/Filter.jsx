import React, { useState } from "react"
import classes from './Filter.module.css'
import FilterIcon from "../UI/Filter-icon"
import {useDispatch} from 'react-redux'
import { useRef } from "react"
import SearchActions from "./SeachActions"
import { searchAction } from "../store/redStore"
import DownArrow from "../UI/DownArrow"

const Filter=()=>{
const category=useRef()
const dispatch=useDispatch()
const[isVisible,setIsvisible]=useState(false)

const onChangeCat=()=>{
    const categories=category.current.value
    if(categories){
        dispatch({type:searchAction.UPDATECategory,payload:categories})
    }
    if(categories==='All'){
        dispatch({type:searchAction.UPDATECategory,payload:null})
    }
}

return(
    <React.Fragment>
        <div className='max-md:flex max-md:items-center relative md:top-2 max-md:justify-center max-md:gap-5 max-md:mt-[-2rem] max-md:bg-black max-md:py-4 max-lg:left-5 max-md:left-0'>

            
            <div className={`${classes.FilterSec} max-md:relative relative max-lg:top-2 max-md:top-0`}>
<FilterIcon/>
        <div className="text-white ml-4">{'Categories'}</div>
            </div>
        <div className={`${classes.dropdown} max-md:!w-[150px]`}>
            <div className={`${classes.dropDownBtn} rounded-md max-md:z-!5`} onClick={()=>setIsvisible(prev=>!prev)}>choose<DownArrow/></div>
            {isVisible && <div className={`${classes['dropDown-Content']} rounded-b-md font-sans max-md:!top-[73%]`}>
            <div className={classes['dropDown-item']}>
                All
            </div>
            <div className={classes['dropDown-item']}>
                Smartphones
            </div>
            <div className={classes['dropDown-item']}>
                Laptops
            </div>
            <div className={classes['dropDown-item']}>
                Fragrances
            </div>
            <div className={classes['dropDown-item']}>
                Skincare
            </div>
            <div className={classes['dropDown-item']}>
                Groceries
            </div>
            <div className={classes['dropDown-item']}>
                Home decoration
            </div>

   
             </div>}
            </div>    
        </div>
         {/* <div className={`${classes.Filter} mb-[1.5rem] max-md:mb-0 text-sm`} onChange={onChangeCat} ref={category}>
        <option>All</option>
        <option>smartphones</option>
        <option>laptops</option>
        <option>fragrances</option>
        <option>skincare</option>
        <option>groceries</option>
        <option>home decoration</option>
    </div>
             */}
    </React.Fragment>
    
)
}
export default Filter

