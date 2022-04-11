import styles from './style.module.css'

const Button = (props) => {
    return <button className={styles.btn} onClick={props.clickEvent}>{props.text}</button>
}

export default Button