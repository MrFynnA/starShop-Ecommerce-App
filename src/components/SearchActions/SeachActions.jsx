import React from 'react'
import SearchForm from './SearchForm'
import classes from './SearchActions.module.css'
import Filter from './Filter'
import SubHeader from '../Layout/SubHeader'
import { Link } from 'react-router-dom'
const SearchActions=()=>{
return (
<React.Fragment>
    <div className='mb-4 relative mt-4 max-md:py-4 bg-black'>
        
    <div className={`${classes.SearchActions}  bg-black  relative`}>
        <SubHeader/>
<div className='flex items-center text-white gap-2 max-md:text-[10px]'>
<Link>Featured Products</Link>
<Link></Link>
<Link>Top sales</Link>
</div>
        <SearchForm inputItems={{
            type:'text',
            placeholder:'search what you want...',
            id:'searchBox'
            
        }}/>
        <div className='max-md:hidden'>
        <Filter/>
        </div>
    </div>
    </div>
   
</React.Fragment>
)
}
export default SearchActions