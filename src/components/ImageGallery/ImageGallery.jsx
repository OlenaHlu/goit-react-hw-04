import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  if (images.length === 0) {
    return null;
  }
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard imgUrl={image.urls.small} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
