import classes from './SubHeader.module.css'
const SubHeader=()=>{

    return(
        <div className={`${classes.SubHeader} bg-black flex justify-center items-center max-lg:hidden pt-2`}>
    <div className='text-white'>SHOP YOUR FAVORITE PRODUCTS TODAY!</div>
    </div>
    )
}

export default SubHeader