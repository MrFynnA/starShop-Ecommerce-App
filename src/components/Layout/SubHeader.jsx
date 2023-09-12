import classes from './SubHeader.module.css'
import StarIC from '../UI/star-icon'
const SubHeader=()=>{

    return(
        <div className={`${classes.SubHeader} bg-black flex justify-center items-center max-lg:hidden pt-2 gap-1`}>
            <StarIC/>
    <div className='text-white'>SHOP YOUR FAVORITE PRODUCTS TODAY!</div>
    </div>
    )
}

export default SubHeader