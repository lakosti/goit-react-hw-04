import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./App.module.css";
import { requestProduct } from "../services/api";
import GalleryImgList from "../GalleryImgList/GalleryImgList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const [items, setItems] = useState(null);
  const [searchQuery, SetSearchQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchDataByQuery() {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await requestProduct(searchQuery);

        setItems(data.results);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDataByQuery();
  }, [searchQuery]);

  const onSetSearchQuery = (query) => {
    SetSearchQuery(query);
    setItems([]);
  };

  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      <GalleryImgList items={items} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </>
  );
}

export default App;
