const GalleryImgItem = ({ items }) => {
  return (
    <div>
      <img src={items.urls.small} width={300} />
    </div>
  );
};

export default GalleryImgItem;
