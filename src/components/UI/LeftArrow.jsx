import classes from './arrows.module.css'
const LeftArrow=()=>{
    return(
        <svg className={classes.leftArrow} style={{width:'30px',margin:'0px 1rem',cursor:'pointer'}} id="Layer_1" enableBackground="new 0 0 128 128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path style={{fill:'white'}} id="Left_Arrow_5_" d="m76 100c-1.023 0-2.047-.391-2.828-1.172l-32-32c-1.563-1.563-1.563-4.094 0-5.656l32-32c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-29.172 29.172 29.172 29.172c1.563 1.563 1.563 4.094 0 5.656-.781.781-1.805 1.172-2.828 1.172zm52-36c0-35.289-28.711-64-64-64s-64 28.711-64 64 28.711 64 64 64 64-28.711 64-64zm-8 0c0 30.879-25.121 56-56 56s-56-25.121-56-56 25.121-56 56-56 56 25.121 56 56z"></path></svg>
    )
}
export default LeftArrow