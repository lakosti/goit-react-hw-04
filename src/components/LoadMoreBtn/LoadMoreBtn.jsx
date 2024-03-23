import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ handleMoreItems, disabled }) => {
  return (
    <button onClick={handleMoreItems} disabled={disabled} className={css.loadMoreBtn}>
      {disabled ? "Loading..." : "Load More"}
    </button>
  );
};
