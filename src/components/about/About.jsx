import React from "react";
import "./About.scss";
import Fade from "react-reveal/Fade";
function About() {
  return (
    <div className="container__about">
      <Fade delay="500" duration={500}>
        <div className="leftside"></div>
      </Fade>
      <Fade delay="700" duration={600}>
        <div className="rightside"></div>
      </Fade>
    </div>
  );
}

export default About;
