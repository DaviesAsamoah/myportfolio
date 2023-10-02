import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What i do</span>
      <span className="skilldescription">
        {" "}
        I am a skilled and passionate web designer responsible for creating the
        design and layout of a website or web pages. Unlike web developers, who
        specialise in creating new websites' structures and the code that forms
        these, web designers tend to focus on the visual aspects of a site, such
        as its layout and its usability.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src="appdesign.jpg" alt="appdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>APP DESIGN</h2>
            <p>
              an ongoing process comprising user experience (UX) and user
              interface (UI) elements. Designers ideate, define solutions,
              create the app's flow and structure, and make stylistic choices
              from colors to fonts
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src="webdesign.jpg" alt="webdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>WEB DESIGN</h2>
            <p>
              the design of websites that are displayed on the internet. It
              usually refers to the user experience aspects of website
              development rather than software development
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src="database.jpg" alt="database" className="skillBarImg" />
          <div className="skillBarText">
            <h2>DATABASE MANAGEMENT SYSYEM</h2>
            <p>
              the design of websites that are displayed on the internet. It
              usually refers to the user experience aspects of website
              development rather than software development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
