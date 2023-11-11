import React, {useState} from "react";
import Modal from "../../Modal";
import "./index.scss";

const Item = (props) => {
  const { cardImage, title, description } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="portfolio-card">
      <div className="card-image">
        <img src={cardImage} />
      </div>
      <div className="card-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-actions">
        <button onClick={openModal}>View more details</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Your Modal Content Goes Here</h2>
        <p>Additional content...</p>
      </Modal>
    </div>
  );
};

export default Item;
