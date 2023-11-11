import React from "react";
import "./index.scss";

const Item = (props) => {
  const { cardImage, title, description } = props;

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
        {/* <img
            width={"25px"}
            height={"25px"}
            src={liked ? "/assets/heart_filled.png" : "/assets/heart.png"}
            onClick={() => setLiked((like) => !like)}
          /> */}
      </div>
    </div>
  );
};

export default Item;
