import Container from "../Container/Container";
import Button from "../Button/Button";
import styles from "./Subscribe.module.scss";

const Subscribe = () => {
  const {
    subscribe__section,
    subscribe__container,
    subscribe__form,
    subscribe__title,
    subscribe__discription,
    subscribe__label,
    subscribe__input,
    subscribe__btn,
  } = styles;
  return (
    <section className={subscribe__section}>
      <Container containerClass={subscribe__container}>
        <form className={subscribe__form}>
          <h2 className={subscribe__title}>Спіймай всі акції!</h2>
          <p className={subscribe__discription}>
            Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
            будуть з`влятись у нашому магазині. А у нас їх багато :D
          </p>
          <label className={subscribe__label}>
            <input
              className={subscribe__input}
              type="text"
              placeholder="введіть"
            />
            <Button className={subscribe__btn}>Підписатись</Button>
          </label>
        </form>
      </Container>
    </section>
  );
};
export default Subscribe;
