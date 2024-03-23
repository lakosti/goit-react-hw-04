import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items = null, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {items !== null &&
        Array.isArray(items) &&
        items.map((item) => {
          return (
            <li key={item.id} className={css.galleryItem}>
              <ImageCard
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

export default ImageGallery;
