import IconButton from "../IconButton/IconButton";
import styles from "./SearchForm.module.scss";
import svgSptite from "../../images/sprite.svg";

const SearchForm = () => {
  const { search__input, search__label, search__icon, search__form, search__btn } = styles;
  return (
    <form className={search__form}>
      <label className={search__label}>
        <input className={search__input} type="text" />
       <IconButton className={search__btn}>
        <svg width="22" height="22" className={search__icon}>
          <use href={svgSptite + "#search"}></use>
        </svg>
       </IconButton>
      </label>
    </form>
  );
};
export default SearchForm;
