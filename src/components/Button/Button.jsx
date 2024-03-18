
import styles from "./Button.module.scss";
import classNames from "classnames";
const Button = ({children, onClick, type, className}) => {
    const {btnClass} = styles 
    const buttonClasses = classNames(`${btnClass} ${className}`)
    return (
        <button className={buttonClasses} onClick={onClick} type={type}>{children}</button>
    )
}
export default Button;