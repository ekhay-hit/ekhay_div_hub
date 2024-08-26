import "../styles/About.css";
import mypic from "../assets/mypic.png";

function About() {
  return (
    <div className="about">
      <h6> About me</h6>
      <div className="image-card">
        <img src={mypic} alt="author picture" />
      </div>
      <p className="about-content">This will about me</p>
    </div>
  );
}

export default About;
