import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ loadMoreItems, loadMore, isLoading }) => {
  return (
    <button onClick={loadMoreItems} disabled={loadMore} className={css.loadMoreBtn}>
      {isLoading ? "Loading..." : "Load More"}
    </button>
  );
};
