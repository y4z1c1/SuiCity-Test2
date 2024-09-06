import React, { useState } from "react";
import Modal from "react-modal";
import "../assets/styles/PlayButton.css";

interface PlayButtonProps {
  onModalStateChange: (isOpen: boolean) => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onModalStateChange }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    onModalStateChange(true); // Notify parent to apply blur
  };

  const closeModal = () => {
    setModalIsOpen(false);
    onModalStateChange(false); // Notify parent to remove blur
  };

  return (
    <div>
      <div className="play-button-container">
        <button className="play-button" onClick={openModal}>
          play
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>hold on, the game isn’t there yet!</h2>
        <button onClick={closeModal} className="close-modal-button">
          close
        </button>
      </Modal>
    </div>
  );
};

export default PlayButton;
