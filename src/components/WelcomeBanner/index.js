import React from "react";
import Card from "../Card";
import ImageSlider from "../ImageSlider";
import "./index.scss";

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      {/* <div className="first-banner">
        <Card height="300px">
          <p>list some details here</p>
        </Card>
      </div> */}
      <div className="second-banner">
        <Card height="300px">
          <ImageSlider
            images={[
              "https://blog.daraz.lk/wp-content/uploads/2021/10/11.11-KV-Banner.png",
              "https://icms-image.slatic.net/images/ims-web/46bfc88b-7d16-4a52-af21-fc10ddf7ce84.webp?scm=1003.4.icms-zebra-100031632-2885430.OTHER_6502721840_7748821",
              "https://icms-image.slatic.net/images/ims-web/1e96b789-4025-4018-8cc1-d93d94f80edc.webp?scm=1003.4.icms-zebra-100031632-2885430.OTHER_6502721833_7748821",
              
            ]}
          />
        </Card>
      </div>
    </div>
  );
};

export default WelcomeBanner;
