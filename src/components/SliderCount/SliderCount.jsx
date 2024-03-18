import styles from './SliderCount.module.scss';
import svgSprite from '../../images/sprite.svg';

const SliderCount = ({ current, total, onClick }) => {
  const {
    count,
    count__current,
    count__slash,
    count__total,
    arrow__icon,
    count__btn,
  } = styles;
  return (
    <div className={count}>
      <span className={count__current}>{current}</span>
      <span className={count__slash}>/</span>
      <span className={count__total}>{total}</span>
      <button className={count__btn}>
        <svg onClick={onClick} className={arrow__icon} width="25" height="11">
          <use href={svgSprite + '#arrow-left'}></use>
        </svg>
      </button>
      <button className={count__btn}>
        <svg className={arrow__icon} width="25" height="11">
          <use href={svgSprite + '#arrow-right'}></use>
        </svg>
      </button>
    </div>
  );
};
export default SliderCount;
