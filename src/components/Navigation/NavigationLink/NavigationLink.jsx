import classNames from "classnames";
import styles from "./NavigationLink.module.scss";

const NavigationLink = ({ children, path, className }) => {
  const { navigation__link } = styles;
  const navLinkClasses = classNames(navigation__link, className);
  return (
    <a className={navLinkClasses} href={path}>
      {children}{" "}
    </a>
  );
};

export default NavigationLink;
