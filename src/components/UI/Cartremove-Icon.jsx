import React from "react"
import classes from './Cartremove-Icon.module.css'

const CartRemoveIcon=(props)=>{
return (
    <svg className={classes.CartRemoveIcon} onClick={props.onClick} style={{width:'34px'}}id="Capa_1" enableBackground="new 0 0 512.003 512.003" viewBox="0 0 512.003 512.003" xmlns="http://www.w3.org/2000/svg"><g><path className={classes.removeIcon} d="m256 466.002c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 46 45 46 45-21.186 45-46z"></path><path className={classes.removeIcon} d="m436 466.002c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 46 45 46 45-21.186 45-46z"></path><path className={classes.removeIcon} d="m15 121.002h64.604l71.938 259.014c1.802 6.489 7.72 10.986 14.458 10.986h270c6.694 0 12.583-4.438 14.429-10.884l61-210c1.289-4.526.381-9.39-2.446-13.154-2.842-3.75-7.28-5.962-11.982-5.962h-54.293c-18.636 52.266-68.119 90-126.707 90s-108.071-37.734-126.707-90h-70.221l-13.614-49.014c-1.802-6.489-7.72-10.986-14.458-10.986h-76.001c-8.291 0-15 6.709-15 15s6.709 15 15 15zm361 240h-150c-8.291 0-15-6.709-15-15s6.709-15 15-15h150c8.291 0 15 6.709 15 15s-6.709 15-15 15zm-180-90h210c8.291 0 15 6.709 15 15s-6.709 15-15 15h-210c-8.291 0-15-6.709-15-15s6.709-15 15-15z"></path><path className={classes.removeIcon} d="m211 106.002c0 57.891 47.109 105 105 105s105-47.109 105-105-47.109-106-105-106-105 48.109-105 106zm136.816-31.817c5.859 5.859 5.859 15.352 0 21.211l-10.605 10.605 10.605 10.605c5.859 5.859 5.859 15.352 0 21.211s-15.352 5.859-21.211 0l-10.605-10.604-10.605 10.605c-5.859 5.859-15.352 5.859-21.211 0s-5.859-15.352 0-21.211l10.605-10.605-10.605-10.605c-5.859-5.859-5.859-15.352 0-21.211s15.352-5.859 21.211 0l10.605 10.605 10.605-10.605c5.86-5.86 15.352-5.86 21.211-.001z"></path></g></svg>
)
}
export default CartRemoveIcon