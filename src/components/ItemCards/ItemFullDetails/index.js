import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.scss";

const ItemFullDetails = ({id}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
        {
        data && (
            <div className="item-details-modal">
                <img className="image" src={data.image} alt={`item-image-${data.id}`}/>
                <div className="more-details">
                    <h2>
                        {data.title}
                    </h2>
                    <h4>
                        <label>Category: </label> {data.category}
                    </h4>
                    <h4>
                        <label>Price: $ </label> {data.price}
                    </h4>
                    <>
                        <label>Description</label> 
                        <p>{data.description}</p>
                    </>
                </div>
            </div>
        )
        }
    </div>
  )
}

export default ItemFullDetails;
