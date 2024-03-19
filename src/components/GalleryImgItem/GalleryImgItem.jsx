const GalleryImgItem = ({ data }) => {
  return (
    <div>
      <img src={data.urls.small} width={300} />
    </div>
  );
};

export default GalleryImgItem;
