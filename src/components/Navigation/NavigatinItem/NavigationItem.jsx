import styles from "./NavigationItem.module.scss";

const NavigationItem = ({children}) => {
    const {navigation__item} = styles;
return (
    <li className={navigation__item}>
{children}
    </li>
)
}

export default NavigationItem;