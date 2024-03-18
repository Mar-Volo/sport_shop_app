import Container from "../Container/Container";
import styles from "./Hero.module.scss";
import heroImg from "../../images/hero_bg/heroImg.jpg";

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
  } = styles;
  return (
    <section className={hero__section}>
      <img className={hero__img} alt="спортзала" src={heroImg} />
      <Container containerClass={hero__container}>
        <div className={hero__title}>
          <h1 className={hero__title_big}>Швидше. Вище. Сильніше.</h1>
          <h1 className={hero__title_small}>Разом із Nike</h1>
        </div>
        <div className={benefits}>
          <h2 className={benefits__title}>Знижки до 40%</h2>

          <p className={benefits__discription}>Залишився лише тиждень</p>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
