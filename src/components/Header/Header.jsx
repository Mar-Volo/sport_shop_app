import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import styles from "./Header.module.scss";
import svgSprite from "../../images/sprite.svg";
import IconButton from "../IconButton/IconButton";

const Header = () => {
  const {
    logo,
    header,
    header__container,
    header__nav,
    header__search,
    heartIcon,
    bagIcon,
  } = styles;
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
          <SearchForm />
          <IconButton>
            <svg width="24" height="24" className={heartIcon}>
              <use href={svgSprite + "#heart"}></use>
            </svg>
          </IconButton>
          <IconButton>
            <svg width="24" height="24" className={bagIcon}>
              <use href={svgSprite + "#bag"}></use>
            </svg>
          </IconButton>
        </div>
      </Container>
    </header>
  );
};

export default Header;
