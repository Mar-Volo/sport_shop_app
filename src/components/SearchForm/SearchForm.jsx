import IconButton from "../IconButton/IconButton";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  const { search__input, search__label } = styles;
  // console.log(styles);
  return (
    <form>
      <label className={search__label}>
        <input className={search__input} type="text" />
        <IconButton />
      </label>
    </form>
  );
};
export default SearchForm;
