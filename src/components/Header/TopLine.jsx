import Container from "../Container/Container";
import styles from "./TopLine.module.scss";

const TopLine = () => {
  const {
    topLine__container,
    topLine__phone,
    topLine__box,
    topLine__register,
    topLine__text,
  } = styles;
  console.log(topLine__container);
  return (
    <div className={topLine__box}>
      <Container containerClass={topLine__container}>
        <div>
          <span className={`${topLine__phone} ${topLine__text}`}>098 900 09 09</span>
          <span>Допомога</span>
        </div>
        <div>
          <span className={`${topLine__register} ${topLine__text}`}>Увійти</span>
          <span className={`${topLine__register} ${topLine__text}`}>/</span>
          <span className={`${topLine__register} ${topLine__text}`}>Зареєструватися</span>
        </div>
      </Container>
    </div>
  );
};

export default TopLine;
