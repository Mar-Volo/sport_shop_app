import NavigationItem from "../NavigatinItem/NavigationItem";
import NavigationLink from "../NavigationLink/NavigationLink";
import styles from "./NavigationList.module.scss";

const NavigationList = () => {
  const { navigation__list } = styles;
  return (
    <ul className={navigation__list}>
      <NavigationItem>
        <NavigationLink>новинки</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink>чоловіки</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink>жінки</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink>аксесуари</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink>акції</NavigationLink>
      </NavigationItem>
    </ul>
  );
};
export default NavigationList;
