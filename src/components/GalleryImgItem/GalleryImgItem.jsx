import css from "./GalleryImgItem.module.css";

const GalleryImgItem = ({ alt, src, modalOpen }) => {
  return (
    <div className={css.imgWrap} onClick={() => modalOpen(src.regular, alt)}>
      <img className={css.imgItem} src={src.small} alt={alt} width={300} />
    </div>
  );
};

export default GalleryImgItem;
