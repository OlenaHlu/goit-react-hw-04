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
                alt={image.description}
                likes={image.likes}
                username={image.user.name}
                openModal={openModal}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
