import React, {useContext} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);
  
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-header">
            <h1 className="skills-heading">Proficiency</h1>
            <p className="skills-subtitle">My expertise levels in different technologies</p>
          </div>
          
          <div className="skills-content">
            <div className="skills-bar">
              {techStack.experience.map((exp, i) => {
                const progressStyle = {
                  width: exp.progressPercentage
                };
                return (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <div className="skill-info">
                        <h3 className="skill-name">{exp.Stack}</h3>
                      </div>
                    </div>
                    <div className="skill-progress-container">
                      <div className="skill-progress-bar">
                        <div 
                          className="skill-progress-fill"
                          style={progressStyle}
                        ></div>
                      </div>
                      <div className="skill-progress-label">
                        <span className="progress-text">{exp.progressPercentage}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="skills-image">
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img
                  alt="Skills"
                  src={require("../../assets/images/skill.svg")}
                />
              )}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
