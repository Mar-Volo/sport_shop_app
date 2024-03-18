import Container from "../Container/Container";
import styles from "./Hero.module.scss";
import heroImg from "../../images/hero_bg/heroImg.jpg";
import IconButton from "../IconButton/IconButton";
import svgSprite from "../../images/sprite.svg";

const Hero = () => {
  const {
    hero__section,
    hero__container,
    hero__title,
    hero__title_big,
    hero__title_small,
    hero__img,
    benefits,
    benefits__title,
    benefits__discription,
    hero__arrowLeft,
    hero__arrowRight,
    pagination,
    pagination__item,
  } = styles;
  return (
    <section className={hero__section}>
      <img className={hero__img} alt="спортзала" src={heroImg} />
      <Container containerClass={hero__container}>
        <IconButton className={hero__arrowLeft}>
          <svg width="17" height="32">
            <use href={svgSprite + '#hero-arrow-left'}></use>
          </svg>
        </IconButton>
        <IconButton className={hero__arrowRight}>
          <svg width="17" height="32">
            <use href={svgSprite + '#hero-arrow-right'}></use>
          </svg>
        </IconButton>
        <div className={hero__title}>
          <h1 className={hero__title_big}>Швидше. Вище. Сильніше.</h1>
          <h1 className={hero__title_small}>Разом із Nike</h1>
        </div>
        <div className={benefits}>
          <h2 className={benefits__title}>Знижки до 40%</h2>

          <p className={benefits__discription}>Залишився лише тиждень</p>
        </div>
        <ul className={pagination}>
          <li className={pagination__item}></li>
          <li className={pagination__item}></li>
          <li className={pagination__item}></li>
        </ul>
      </Container>
    </section>
  );
};
export default Hero;
