import classes from './Backdrop.module.css'

const BackDrop=(props)=>{
 return(
    <div className={classes.BackDrop} onClick={props.onClick}>{props.children}</div>
 )
}
export default BackDrop