import React from "react";
import Card from "../Card";
import "./index.scss";

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <div className="first-banner">
        <Card>
          <p>welcome note here....</p>
          <p>welcome note here....</p>
          <p>welcome note here....</p>ß
        </Card>
      </div>
      <div className="second-banner">
        <Card>
          <p>welcome note here....</p>
        </Card>
      </div>
    </div>
  );
};

export default WelcomeBanner;
