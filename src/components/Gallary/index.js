import React from "react";
import "./index.scss";

const Gallery = ({images}) => {
    console.log(images);
  return (
    <div className="gallery-container">
      <h1>Most recent events held in our company...</h1>
      <p>Recent occations in our organization</p>
      <br />
      <div className="grid-container">
        {
            images.length > 0 && images.map(image => {
                return (<div className="grid-item">
                    <img src={image.download_url} alt="image"/>
                    <p>{image.author}</p>
                </div>)
            })
        }
      </div>
    </div>
  );
};

export default Gallery;
