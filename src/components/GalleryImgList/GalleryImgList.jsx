import GalleryImgItem from "../GalleryImgItem/GalleryImgItem";
import css from "./GalleryImgList.module.css";

const GalleryImgList = ({ items = null, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {items !== null &&
        Array.isArray(items) &&
        items.map((item) => {
          return (
            <li key={item.id} className={css.galleryItem}>
              <GalleryImgItem
                data={item}
                alt={item.alt_description}
                src={item.urls}
                modalOpen={openModal}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default GalleryImgList;
