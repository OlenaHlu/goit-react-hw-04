import ReactModal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ isOpen, isClose, imageUrl, imageAlt }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      isClose={isClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </ReactModal>
  );
};
export default ImageModal;
