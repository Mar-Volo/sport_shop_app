
import classNames from 'classnames';
import styles from './IconButton.module.scss';

const IconButton = ({ children, className, ...rest }) => {
    const { iBtn } = styles;
    const buttonClasses = classNames(iBtn, className); 
    return (
        <button className={buttonClasses} {...rest}>
            {children}
        </button>
    );
};

export default IconButton;