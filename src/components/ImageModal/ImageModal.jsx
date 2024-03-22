import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "25%",
    heigth: "50%",
  },
  overlay: {
    backgroundColor: "#142a39db",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ isModalOpen, closeModal, src, alt }) => {
  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
      <img src={src} alt={alt} />
    </Modal>
  );
};

export default ImageModal;
