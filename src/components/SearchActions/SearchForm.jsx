import classes from './SearchForm.module.css'
import SearchIcon from '../UI/Search-Icon'
import {useDispatch} from 'react-redux'
import SearchActions from './SeachActions'
import { searchAction } from '../store/redStore'

const SearchForm=(props)=>{
    const dispatch=useDispatch()
const onGetSearchTerm=(event)=>{
     dispatch({type:searchAction.UPDATETERM, payload:event.target.value.trim()})
}


return <span className={`${classes['search-input']} max-md:h-full max-md:!rounded-lg`}><SearchIcon/><input className='max-md:!h-7' {...props.inputItems} onChange={onGetSearchTerm}/></span>
}
export default SearchForm