import Container from "../Container/Container";
import Button from "../Button/Button";
import styles from "./ForCatalog.module.scss";
import smImg from "../../images/forCatalogImg/for_catalog@1x.jpg";
import lgImg from "../../images/forCatalogImg/for_catalog@2x.jpg";

const ForCatalog = () => {
  const {
    forCatalog__section,
    forCatalog__container,
    forCatalog__content,
    forCatalog__title,
    forCatalog__discription,
  } = styles;
  return (
    <section className={forCatalog__section}>
      <Container containerClass={forCatalog__container}>
        <div className={forCatalog__content}>
          <h2 className={forCatalog__title}>
            Ми знаємо, що сподобається вашим “великим” друзям!
          </h2>
          <p className={forCatalog__discription}>
            Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
            термобілизни “Big warm”
          </p>
          <Button type={"button"}>До каталогу</Button>
        </div>
        <picture>
          <source
            srcSet={`${smImg} 1x, ${lgImg} 2x`}
            type="image/jpg"
          />
          <img
            src={smImg}
            alt="Чоловік із гантелею"
            width="570"
            height="auto"
          />
        </picture>
      </Container>
    </section>
  );
};

export default ForCatalog;
