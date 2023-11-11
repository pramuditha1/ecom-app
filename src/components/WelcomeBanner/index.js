import React from "react";
import Card from "../Card";
import ImageSlider from "../ImageSlider";
import "./index.scss";

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      {/* <div className="first-banner">
        <Card height="250px">
          
        </Card>
      </div> */}
      <div className="second-banner">
        <Card height="300px">
          <ImageSlider
            images={[
              "https://blog.daraz.lk/wp-content/uploads/2021/10/11.11-KV-Banner.png",
              "https://static.vecteezy.com/system/resources/previews/011/960/616/original/11-11-sale-banner-design-template-with-3d-podium-in-red-white-and-orange-color-vector.jpg",
              "https://media.istockphoto.com/id/1321283484/vector/singles-day-sale-banner-template-11-11-global-shopping-day-holiday-event-horizontal-orange.jpg?s=1024x1024&w=is&k=20&c=z4RxswwzZ5JejJ0Sy6VGcClZM36V34SzDiVjgBYxzds=",
              
            ]}
          />
        </Card>
      </div>
    </div>
  );
};

export default WelcomeBanner;
