import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ loadMoreItems }) => {
  return (
    <button onClick={loadMoreItems} className={css.loadMoreBtn}>
      LoadMoreBtn
    </button>
  );
};
