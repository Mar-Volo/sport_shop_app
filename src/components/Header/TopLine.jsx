import Container from "../Container/Container";
import styles from "./TopLine.module.scss";

const TopLine = () => {
  const {
    "top-line__box": topLineBox,
    "top-line__container": topLineContainer,
   "top-line__phone": topLinePhone,
    "top-line__register": topLineRegister,
   "top-line__text": topLineText,
  } = styles;
  
  return (
    <div className={topLineBox}>
      <Container containerClass={topLineContainer}>
        <div>
          <span className={`${topLinePhone} ${topLineText}`}>098 900 09 09</span>
          <span>Допомога</span>
        </div>
        <div>
          <span className={`${topLineRegister} ${topLineText}`}>Увійти</span>
          <span className={`${topLineRegister} ${topLineText}`}>/</span>
          <span className={`${topLineRegister} ${topLineText}`}>Зареєструватися</span>
        </div>
      </Container>
    </div>
  );
};

export default TopLine;
