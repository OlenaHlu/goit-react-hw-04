import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, isOpen }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard imgUrl={image.urls.small} onClick={isOpen} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
