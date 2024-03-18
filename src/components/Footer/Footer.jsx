import Container from "../Container/Container";
import styles from "./Footer.module.scss";

const Footer = () => {
  const {
    footer,
    footer__container,
    footer__list,
    footer__item,
    footer__title,
    footer__link,
    footer__discription,
  } = styles;
  return (
    <footer className={footer}>
      <Container containerClass={footer__container}>
        <ul className={footer__list}>
          <li className={footer__item}>
            <p className={footer__title}>Контакт - центр</p>
            <a href="tel" className={footer__link}>
              098 900 09 09{" "}
            </a>
            <p className={footer__discription}>Пн - Пт 09:00 - 21:00</p>
          </li>
          <li className={footer__item}>
            <p className={footer__title}>Покупцям</p>
            <a href="#" className={footer__link}>
              Оплата і доставка
            </a>
            <a href="#" className={footer__link}>
              Повернення
            </a>
            <a href="#" className={footer__link}>
              Питання та відповіді
            </a>
          </li>
          <li className={footer__item}>
            <p className={footer__title}>Особистий кабінет</p>
            <a href="#" className={footer__link}>
              Мої дані
            </a>
            <a href="#" className={footer__link}>
              Історія замовлень
            </a>
            <a href="#" className={footer__link}>
              Улюблені
            </a>
            <a href="#" className={footer__link}>
              Розсилки
            </a>
          </li>
          <li className={footer__item}>
            <p className={footer__title}>Про компанію</p>
            <a href="#" className={footer__link}>
              Про нас
            </a>
            <a href="#" className={footer__link}>
              Новини
            </a>
            <a href="#" className={footer__link}>
              Стати партнером
            </a>
            <a href="#" className={footer__link}>
              Угода користувача
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
