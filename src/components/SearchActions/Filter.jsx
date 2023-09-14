import React, { useEffect, useState } from "react"
import classes from './Filter.module.css'
import FilterIcon from "../UI/Filter-icon"
import {useDispatch,useSelector} from 'react-redux'
import { searchAction } from "../store/redStore"
import DownArrow from "../UI/DownArrow"
// import { useSelector } from "react-redux"
import { useMouseOutClickSpecific } from "../../hooks/mouseDownSpecific"

const Filter=()=>{
// const category=useRef()
const dispatch=useDispatch()
const[isVisible,setIsvisible]=useState(false)
const {domRef:dropDownRef}=useMouseOutClickSpecific(()=>setIsvisible(false))
const[selected,setSelected]=useState('select...')
const currentCategory=useSelector(state=>state.searchTerm.category)
useEffect(()=>{
    //when you click on try again and theres a dispatch to set category to null
    //here i also set it back to select..
if(currentCategory===null){
        setSelected('select...')
    }
},[currentCategory])
const categoryOptions=['All','Smartphones','Laptops','Fragrances','Skincare','Groceries','Home decoration']

const categories=selected

useEffect(()=>{
    if(categories && categories!=='select...' && categories!=='All'){
        dispatch({type:searchAction.UPDATECategory,payload:categories})
    }
    if(categories==='All'){
        setSelected('select...')
        dispatch({type:searchAction.UPDATECategory,payload:null})
    }
},[categories,dispatch])




return(
    <React.Fragment>
        <div className='max-md:flex max-md:items-center relative md:top-2 max-md:justify-center max-md:gap-5 max-md:mt-[-2rem] max-md:bg-black max-md:py-4 max-lg:left-5 max-md:left-0'>

            
            <div className={`${classes.FilterSec} max-md:relative relative max-lg:top-2 max-md:top-0`}>
<FilterIcon/>
        <div className="text-white ml-4">{'Categories'}</div>
            </div>
        <div ref={dropDownRef}  onClick={()=>{}} className={`${classes.dropdown} max-md:!w-[150px]`}>
            <div  className={`${classes.dropDownBtn} rounded-md max-md:z-!5`} onClick={()=>setIsvisible(prev=>!prev)}>{selected}<DownArrow/></div>
            {isVisible && <div  onClick={()=>{}}  className={`${classes['dropDown-Content']} rounded-b-md font-sans max-md:!top-[73%]`}>
           {categoryOptions.map(items=><div  key={items} onClick={()=>{
            setSelected(items)
            setIsvisible(false)
        }
        
        } className={classes['dropDown-item']}>
                {items}
            </div>)}

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

