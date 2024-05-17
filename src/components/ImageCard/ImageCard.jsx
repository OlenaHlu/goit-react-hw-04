const ImageCard = ({ alt, urlSm, urlReg, likes, username, openModal }) => {
  return (
    <>
      <div onClick={() => openModal(alt, urlReg)}>
        <img src={urlSm} alt={alt} />
        <div>
          <p>{username}</p>
          <p>{likes}</p>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
