import "../styles/About.css";
import mypic from "../assets/mypic.png";

function About() {
  return (
    <div className="about">
      <h6> About me</h6>
      <div className="image-card">
        <img src={mypic} alt="author picture" />
      </div>
      <p className="about-content">
        I am , an enthusiastic and driven Full Stack Developer with a rich
        background in technical support and leadership. I graduated from the
        University of Central Florida with a bachelor's degree in Science of
        Information Technology. Through my recent completion of the Full Stack
        Developer certification program at the University of Central Florida, I
        have gained practical experience in front-end and back-end technologies
        such as the MERN stack (MongoDB, Express.js, React, Node.js).
        Additionally, I have self-taught myself .NET MVC and Blazor. My recent
        certification as a Full Stack Developer from the University of Central
        Florida, along with my practical experience in diagnosing and resolving
        technical issues, ensures seamless integration and functionality in web
        development projects. I bring a fresh perspective, a strong eagerness to
        learn, and a commitment to continuous growth. Let's connect and explore
        how I can be a valuable addition to your team!
      </p>
    </div>
  );
}

export default About;
