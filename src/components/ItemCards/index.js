import React, { useEffect, useState } from "react";
import Card from "../Card";
import Item from "./Item";
import "./index.scss";
import axios from "axios";

const ItemCards = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="item-container">
      {data.length > 0 &&
        data.map((item, i) => {
          console.log(item);
          return (
            <Item
              key={item.id}
              item={item}          
            />
          );
        })}
    </div>
  );
};

export default ItemCards;
