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
        <div className={classes.MainFilter}>
            <div className={classes.FilterSec}>
<FilterIcon/>
        <label className="text-white ml-4">{'Categories'}</label>
            </div>
            
    <select className={classes.Filter} onChange={onChangeCat} ref={category}>
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