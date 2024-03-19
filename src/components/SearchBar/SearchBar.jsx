import { Field, Form, Formik } from "formik";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={css.formWrap}>
      <Formik>
        <Form className={css.fromSeacrh}>
          <div className={css.seacrhPosition}>
            <Field
              className={css.fromSeacrhInput}
              type="text"
              placeholder="Search images and photos"
            />
            <button className={css.fromSeacrhBtn} type="submit">
              <IoIosSearch />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
