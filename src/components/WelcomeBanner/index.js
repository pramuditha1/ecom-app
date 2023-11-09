import React from "react";
import Card from "../Card";
import "./index.scss";

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <div className="first-banner">
        <Card>
          11:11 banner
        </Card>
      </div>
      <div className="second-banner">
        <Card>
          promotion banners of your store....
        </Card>
      </div>
    </div>
  );
};

export default WelcomeBanner;
