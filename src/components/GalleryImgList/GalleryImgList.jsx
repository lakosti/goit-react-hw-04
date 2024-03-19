import GalleryImgItem from "../GalleryImgItem/GalleryImgItem";
import css from "./GalleryImgList.module.css";

const GalleryImgList = ({ items = null }) => {
  return (
    <ul className={css.galleryList}>
      {items !== null &&
        Array.isArray(items) &&
        items.map((item) => {
          return (
            <li key={item.id} className={css.galleryItem}>
              <GalleryImgItem data={item} />
            </li>
          );
        })}
    </ul>
  );
};

export default GalleryImgList;
