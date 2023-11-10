import React from "react";
import Card from "../Card";
import ImageSlider from "../ImageSlider";
import "./index.scss";

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <div className="second-banner">
        <Card>
          <ImageSlider
            images={[
              "https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg",
              "https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Professional-website-banner-with-yellow-shapes-1180x627.jpg",
              "https://i.pinimg.com/736x/e1/98/64/e198648820538645247898e06e00c5e0.jpg",
            ]}
          />
        </Card>
      </div>
    </div>
  );
};

export default WelcomeBanner;
