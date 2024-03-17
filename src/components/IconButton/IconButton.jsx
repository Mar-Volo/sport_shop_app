
import styles from './IconButton.module.scss';

const IconButton = ({children}) => {
    const {iBtn} = styles;
    return (
        <button className={iBtn}>{children}</button>
    )
}
export default IconButton;