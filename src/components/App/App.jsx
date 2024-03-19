import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./App.module.css";
import { requestProduct } from "../services/api";
import GalleryImgList from "../GalleryImgList/GalleryImgList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";

const notify = () => toast.error("Not matching results ");

function App() {
  const [items, setItems] = useState(null);
  const [searchQuery, SetSearchQuery] = useState(null);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchDataByQuery() {
      try {
        setIsLoading(true);

        const data = await requestProduct(searchQuery, page);

        if (data.total === 0) {
          notify();
        }

        setLoadMore(data.total_pages > page);

        setItems((prevState) => {
          return [...prevState, ...data.results];
        });
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDataByQuery();
  }, [searchQuery, page]);

  const onSetSearchQuery = (query) => {
    SetSearchQuery(query);
    setLoadMore(false);
    setPage(1);
    setIsError(false);
    setItems([]);
  };
  const loadMoreItems = () => {
    setIsLoading(true);
    setPage((prevState) => prevState + 1);
    setIsLoading(false);
  };
  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      <GalleryImgList items={items} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {loadMore && <LoadMoreBtn loadMoreItems={loadMoreItems} />}
    </>
  );
}

export default App;
