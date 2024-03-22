import { useEffect, useState } from "react";
import { requestProduct } from "../services/api";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import GalleryImgList from "../GalleryImgList/GalleryImgList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";
import "./App.module.css";
import ImageModal from "../ImageModal/ImageModal";

const notify = () => toast.error("Not matching results ");

function App() {
  const [items, setItems] = useState(null);
  const [searchQuery, SetSearchQuery] = useState(null);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchDataByQuery() {
      try {
        setIsLoading(true);

        const data = await requestProduct(searchQuery, page);

        if (data.total === 0) {
          notify();
        }

        setItems((prevState) => {
          return [...prevState, ...data.results];
        });
        setLoadMore(data.total_pages > page);
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
    setIsLoading(false);
    setLoadMore(false);
    setPage(1);
    setIsError(false);
    setItems([]);
  };
  const loadMoreItems = () => {
    setPage((prevState) => prevState + 1);
  };

  const openModal = (url, alt) => {
    setIsModalOpen(true);
    setAlt(alt);
    setUrl(url);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setAlt("");
    setUrl("");
  };
  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      <GalleryImgList openModal={openModal} items={items} />
      {isError && <ErrorMessage />}
      {loadMore && (
        <LoadMoreBtn
          loadMoreItems={loadMoreItems}
          isLoading={isLoading}
          loadMore={isLoading}
        ></LoadMoreBtn>
      )}
      {isLoading && <Loader />}
      <ImageModal isModalOpen={isModalOpen} src={url} alt={alt} closeModal={closeModal} />
    </>
  );
}

export default App;
