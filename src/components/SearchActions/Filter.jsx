import React from "react"
import classes from './Filter.module.css'
import FilterIcon from "../UI/Filter-icon"

const Filter=()=>{
return(
    <React.Fragment>
        <div className={classes.MainFilter}>
            <div className={classes.FilterSec}>
<FilterIcon/>
        <label>{'Filter'}</label>
            </div>
            
    <select className={classes.Filter}>
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