import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import styles from "./Header.module.scss";

const Header = () => {
  const { logo, header, header__container, header__nav, header__search } = styles;
  return (
    <header className={header}>
      <Container
        className={header__container}
        containerClass={header__container}
      >
        <div className={header__nav}>
        <span className={logo}>Ignat</span>
        <Navigation />
        </div>
       <div className={header__search}>
       <SearchForm/>
       </div>
      </Container>
    </header>
  );
};

export default Header;
