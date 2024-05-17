import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard
                urlSm={image.urls.small}
                urlReg={image.urls.regular}
                likes={image.likes}
                username={image.user.name}
                onClick={openModal}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
