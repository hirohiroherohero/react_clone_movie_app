import styles from './style.module.css'

const Button = (props) => {
    return <button className={styles.btn}>{props.text}</button>
}

export default Button