import React from 'react'
import SearchForm from './SearchForm'
import classes from './SearchActions.module.css'
import Filter from './Filter'
const SearchActions=()=>{
return (
<React.Fragment>
    <div className={classes.SearchActions}>
        <SearchForm inputItems={{
            type:'text',
            placeholder:'search products...',
            id:'searchBox'
            
        }}/>
        <Filter/>
    </div>
</React.Fragment>
)
}
export default SearchActions