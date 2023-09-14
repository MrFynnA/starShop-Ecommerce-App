import classes from './Loader.module.css'
import LoadingIcon from "./Loading"

export const LoaderSpinner=()=>{
    return <div className={`${classes.Loading} ${classes.spin}`}><LoadingIcon/></div>
}