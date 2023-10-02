import React from "react";
import "./intro.css";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="IntroText">
          I am <span className="IntroName">Davies</span>
          <br />
          Website Designer
        </span>
        <p className="IntroPara">
          {" "}
          I am a skilled web designer with experience in creating <br />
          visually appealing and user friendly websites
        </p>
        <Link>
          <button className="btn">
            <img src="hire.jpg" alt="Hire Me" className="btnImg" />
            Hire Me
          </button>{" "}
        </Link>
      </div>
      <img src="photo.jpg" alt="Profile" className="photo" />
    </section>
  );
};

export default Intro;
