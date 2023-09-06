import styles from './Button.module.css'

const MyButton=(props)=>{

    return <button type={props.type || 'button'} disabled={props.disabled} className={styles.myButton}
    style={{
    color:`${props.textcolor}`,
    backgroundColor:`${props.backgroundcolor}`,
    fontSize:`${props.fontsize}`
    }}>{props.children}
    </button>
}

export default MyButton