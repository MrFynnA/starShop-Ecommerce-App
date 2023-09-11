import classes from './Account-icon.module.css'

const AccountIcon=(props)=>{
return(
    <div className={`${classes.accountMain} flex justify-center items-end gap-1 cursor-pointer`}>

        <svg onClick={props.onClick} className={classes.accountIcon} style={{width:'35px'}} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path className={classes.accIcon} d="m21.41 20h-10.82a8.59 8.59 0 0 0 -8.59 8.59 1.41 1.41 0 0 0 1.41 1.41h25.18a1.41 1.41 0 0 0 1.41-1.41 8.59 8.59 0 0 0 -8.59-8.59zm-9.34 6a1 1 0 1 1 1-1 1 1 0 0 1 -1.01 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1 -1.01 1zm3.88 0a1 1 0 1 1 1-1 1 1 0 0 1 -1.01 1z"></path><path className={classes.accIcon} d="m28.59 31h-25.18a2.41 2.41 0 0 1 -2.41-2.41 9.6 9.6 0 0 1 9.59-9.59h10.82a9.6 9.6 0 0 1 9.59 9.59 2.41 2.41 0 0 1 -2.41 2.41zm-18-10a7.6 7.6 0 0 0 -7.59 7.59.41.41 0 0 0 .41.41h25.18a.41.41 0 0 0 .41-.41 7.6 7.6 0 0 0 -7.59-7.59z"></path><path className={classes.accIcon} d="m16 17a8 8 0 1 1 8-8 8 8 0 0 1 -8 8zm0-14a6 6 0 1 0 6 6 6 6 0 0 0 -6-6z"></path><circle className={classes.accIcon} cx="16" cy="9" r="7"></circle></g></svg>    
        <span className={`${classes.accountText} text-sm font-bold font-mono text-white max-md:hidden`}>Account</span>
    </div>
)
}
export default AccountIcon