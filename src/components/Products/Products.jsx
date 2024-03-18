import Container from "../Container/Container";
import SliderCount from "../SliderCount/SliderCount";
import IconButton from "../IconButton/IconButton";
import styles from "./Products.module.scss";
import termoManSmImg from "../../images/products/termo_man@1x.jpg";
import termoManLgImg from "../../images/products/termo_man@2x.jpg";
import girlImgSmImg from "../../images/products/girl_@1x.jpg";
import girlImgLgImg from "../../images/products/girl_@2x.jpg";
import AfroManSmImg from "../../images/products/afro_man_4@1x.jpg";
import AfroManLgImg from "../../images/products/afro_man_4@2x.jpg";
import svgSprite from "../../images/sprite.svg";

const Products = () => {
  const {
    products__section,
    products__container,
    products__topLine,
    products__title,
    products__list,
    products__item,
    products__link,
    products__img,
    discription,
    discription__title,
    discription__text,
    coast,
    products__like,
    likeIcon,
  } = styles;
  return (
    <section className={products__section}>
      <Container containerClass={products__container}>
        <div className={products__topLine}>
          <h3 className={products__title}>Найгарячіші товари</h3>
          <SliderCount current={"0" + 1} total={"0" + 3}/>
        </div>

        <ul className={products__list}>
          <li className={products__item}>
            <a className={products__link} href="продукт">
              <picture className={products__img}>
                <source
                  srcSet={`${termoManSmImg} 1x, ${termoManLgImg} 2x`}
                  type="image/jpg"
                />
                <img
                  src={termoManSmImg}
                  alt="Спортивний чоловік у термобілизні"
                  width="370"
                  height="auto"
                />
              </picture>
              <div className={discription}>
                <h4 className={discription__title}>
                  Термобілизна для бодібілдерів
                </h4>
                <p className={discription__text}>Для чоловіків 2 кольори</p>
                <strong className={coast}>4000 грн.</strong>
              </div>
              <IconButton className={products__like}>
                <svg width="18" height="18" className={likeIcon}>
                  <use href={svgSprite + "#heart"}></use>
                </svg>
              </IconButton>
            </a>
          </li>
          <li className={products__item}>
            <a className={products__link} href="продукт">
              <picture className={products__img}>
                <source
                  srcSet={`${girlImgSmImg} 1x, ${girlImgLgImg} 2x`}
                  type="image/jpg"
                />
                <img
                  src={termoManSmImg}
                  alt="Струнка спортивна дівчина"
                  width="370"
                  height="auto"
                />
              </picture>
              <div className={discription}>
                <h4 className={discription__title}>Майка для бодібілдерів</h4>
                <p className={discription__text}>Для жінок 6&nbsp;pкольорів</p>
                <strong className={coast}>1100 грн.</strong>
              </div>
              <IconButton className={products__like}>
                <svg width="18" height="18" className={likeIcon}>
                  <use href={svgSprite + "#heart"}></use>
                </svg>
              </IconButton>
            </a>
          </li>
          <li className={products__item}>
            <a className={products__link} href="продукт">
              <picture className={products__img}>
                <source
                  srcSet={`${AfroManSmImg} 1x, ${AfroManLgImg} 2x`}
                  type="image/jpg"
                />
                <img
                  src={termoManSmImg}
                  alt="Афроамериканець з важким ланцюгом"
                  width="370"
                  height="auto"
                />
              </picture>
              <div className={discription}>
                <h4 className={discription__title}>
                  Ланцюжок для бодібілдерів
                </h4>
                <p className={discription__text}>Аксесуари 30&nbsp;кг</p>
                <strong className={coast}>2000 грн.</strong>
              </div>
              <IconButton className={products__like}>
                <svg width="18" height="18" className={likeIcon}>
                  <use href={svgSprite + "#heart"}></use>
                </svg>
              </IconButton>
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Products;
