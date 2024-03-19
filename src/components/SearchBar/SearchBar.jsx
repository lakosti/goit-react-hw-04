import { Field, Form, Formik } from "formik";
import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSetSearchQuery }) => {
  return (
    <div className={css.formWrap}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values) => {
          onSetSearchQuery(values.query);
        }}
      >
        <Form className={css.fromSeacrh}>
          <div className={css.seacrhPosition}>
            <Field
              className={css.fromSeacrhInput}
              type="text"
              name="query"
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
