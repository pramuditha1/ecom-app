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
              "https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
              "https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg",
              
            ]}
          />
        </Card>
      </div>
    </div>
  );
};

export default WelcomeBanner;
