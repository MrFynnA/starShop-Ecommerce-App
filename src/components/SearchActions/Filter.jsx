import React from "react"
import classes from './Filter.module.css'
import FilterIcon from "../UI/Filter-icon"
import {useDispatch} from 'react-redux'
import { useRef } from "react"
import SearchActions from "./SeachActions"
import { searchAction } from "../store/redStore"

const Filter=()=>{
const category=useRef()
const dispatch=useDispatch()

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
        <div className='max-md:flex max-md:items-center relative md:top-2 max-md:justify-around max-md:mt-[-2rem] max-md:bg-black max-md:py-4'>

            
            <div className={`${classes.FilterSec} max-md:relative`}>
<FilterIcon/>
        <div className="text-white ml-4">{'Categories'}</div>
            </div>
            
    <select className={`${classes.Filter} mb-[1.5rem] max-md:mb-0`} onChange={onChangeCat} ref={category}>
        <option>All</option>
        <option>smartphones</option>
        <option>laptops</option>
        <option>fragrances</option>
        <option>skincare</option>
        <option>groceries</option>
        <option>home decoration</option>
    </select>
        </div>
    </React.Fragment>
    
)
}
export default Filter