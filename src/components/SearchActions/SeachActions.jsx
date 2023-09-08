import React from 'react'
import SearchForm from './SearchForm'
import classes from './SearchActions.module.css'
import Filter from './Filter'
import SubHeader from '../Layout/SubHeader'
import { Link } from 'react-router-dom'
const SearchActions=()=>{
return (
<React.Fragment>
    <div className='mt-[-1rem]'>
        <SubHeader/>
        
    <div className={`${classes.SearchActions} bg-black`}>
<div className='flex items-center text-white gap-2'>
<Link>Featured Products</Link>
<Link></Link>
<Link>Top sales</Link>
</div>
        <SearchForm inputItems={{
            type:'text',
            placeholder:'search products...',
            id:'searchBox'
            
        }}/>
        <Filter/>
    </div>
    </div>
   
</React.Fragment>
)
}
export default SearchActions