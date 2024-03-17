import NavigationList from "./NavigationList/NavigationList";
import styles from "./Navigation.module.scss";

const Navigation = () => {
    const {navigation} = styles;
return (
<nav className={navigation}>
<NavigationList/>
</nav>
)
}

export default Navigation;