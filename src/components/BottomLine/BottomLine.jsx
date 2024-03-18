import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import styles from "./BottomLine.module.scss";

const BottomLine = () => {
    const {bottomLine, bottomLine__container, bottomLine__copiwrite, bottomLine__link} = styles;
  return (
    <div className={bottomLine}>
      <Container containerClass={bottomLine__container}>
        <Navigation className={bottomLine__link}/>
        <p className={bottomLine__copiwrite}>
          © 2022 — 2023 IGNAT. Усі права захищені.
        </p>
      </Container>
    </div>
  );
};

export default BottomLine;
