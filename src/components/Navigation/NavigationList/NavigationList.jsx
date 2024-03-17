import NavigationItem from "../NavigatinItem/NavigationItem";
import styles from "./NavigationList.module.scss";

const NavigationList = () => {
  const { navigation__list } = styles;
  return (
    
      <ul className={navigation__list}>
        <NavigationItem>новинки</NavigationItem>
        <NavigationItem>чоловіки</NavigationItem>
        <NavigationItem>жінки</NavigationItem>
        <NavigationItem>аксесуари</NavigationItem>
        <NavigationItem>акції</NavigationItem>
      </ul>
  );
};
export default NavigationList;
