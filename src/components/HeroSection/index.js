import profile from "../../assets/images/profile.png";
import github from "../../assets/images/github.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import "./index.scss";

const HeroSection = (props) => {
  const { name, aboutme } = props;

  return (
    <div className="heroContainer">
      <section className="aboutme">
        <div className="title">
          <h1>{name}</h1>
          <p>{aboutme}</p>
          <section className="social-icon-list">
            <img src={github} style={{ height: "48px" }} alt="github logo" />
            <img
              src={instagram}
              style={{ height: "48px" }}
              alt="instagram logo"
            />
            <img
              src={linkedin}
              style={{ height: "48px" }}
              alt="linkedin logo"
            />
            <img src={twitter} style={{ height: "48px" }} alt="twitter logo" />
          </section>
        </div>
        <div>
          <img className="profImage" src={profile} alt="profile image" />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
