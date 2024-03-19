import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./App.module.css";
import { requestProduct } from "../services/api";
import GalleryImgList from "../GalleryImgList/GalleryImgList";

function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, SetSearchQuery] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  //   const [errMsg, setErrMsg] = useState(false);

  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchDataByQuery() {
      try {
        const data = await requestProduct(searchQuery);

        console.log(data);
        setItems(data.results);
      } catch (err) {
        console.log(err);
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
    </>
  );
}

export default App;
