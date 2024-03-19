import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css.errMsg}>Whoops, something went wrong! Please try reloading this page! </p>
  );
};

export default ErrorMessage;
