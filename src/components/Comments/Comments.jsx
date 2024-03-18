import Container from "../Container/Container";
import SliderCount from "../SliderCount/SliderCount";
import styles from "./Comments.module.scss";
import avatar from "../../images/avatar/heroImg.jpg";
import svgSprite from "../../images/sprite.svg"
const Comments = () => {
  const {
    comments__section,
    comments__container,
    comments__topLine,
    comments__title,
    comments__list,
    comments__item,
    user,
    user__avatar,
    rating,
    rating__list,
    rating__item,
    rating__icon,
    user__name,
    comments__txt,
  } = styles;
  return (
    <section className={comments__section}>
      <Container containerClass={comments__container}>
        <div className={comments__topLine}>
          <h3 className={comments__title}>Відгуги наших клієнтів</h3>
          <SliderCount current={"0" + 1} total={"0" + 3} />
        </div>
        <ul className={comments__list}>
          <li className={comments__item}>
            <div className={user}>
              <img width="50" height="50" className={user__avatar} src={avatar} alt="Аватар" />
              <div className={rating}>
                <ul className={rating__list}>
                  <li className={rating__item}>
                    <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                </ul>
                <p className={user__name}>Жора Ремінгтон</p>
              </div>
            </div>
            <p className={comments__txt}>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </li>
          <li className={comments__item}>
            <div className={user}>
              <img width="50" height="50" className={user__avatar} src={avatar} alt="Аватар" />
              <div className={rating}>
                <ul className={rating__list}>
                  <li className={rating__item}>
                    <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                </ul>
                <p className={user__name}>Жора Ремінгтон</p>
              </div>
            </div>
            <p className={comments__txt}>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </li>
          <li className={comments__item}>
            <div className={user}>
              <img width="50" height="50" className={user__avatar} src={avatar} alt="Аватар" />
              <div className={rating}>
                <ul className={rating__list}>
                  <li className={rating__item}>
                    <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                </ul>
                <p className={user__name}>Жора Ремінгтон</p>
              </div>
            </div>
            <p className={comments__txt}>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </li>
          <li className={comments__item}>
            <div className={user}>
              <img width="50" height="50" className={user__avatar} src={avatar} alt="Аватар" />
              <div className={rating}>
                <ul className={rating__list}>
                  <li className={rating__item}>
                    <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                  <li className={rating__item}>
                  <svg width="8" height="8" className={rating__icon}>
                      <use href={svgSprite + "#star"}></use>
                    </svg>
                  </li>
                </ul>
                <p className={user__name}>Жора Ремінгтон</p>
              </div>
            </div>
            <p className={comments__txt}>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};
export default Comments;
