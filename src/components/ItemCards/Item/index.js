import React, {useState} from "react";
import Modal from "../../Modal";
import ItemFullDetails from "../ItemFullDetails";
import "./index.scss";

const Item = (props) => {
  const { id, image, title, category, price } = props.item;
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
        <img src={image} alt={`item-image-${id}`}/>
      </div>
      <div className="card-details">
        <h3>{title}</h3>
        <p>{category}</p>
        <h2>USD $ {price}</h2>
      </div>
      <div className="card-actions">
        <button onClick={openModal}>View more details</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ItemFullDetails id={id}/>
      </Modal>
    </div>
  );
};

export default Item;
