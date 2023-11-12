import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "../../components/Gallary";

const Portfolio = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("https://picsum.photos/v2/list").then((response) => {
      setData(response.data);
    });
  }, []);
  return data && <Gallery images={data} />;
};

export default Portfolio;
