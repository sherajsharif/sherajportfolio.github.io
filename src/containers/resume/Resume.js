import React, {useContext} from "react";
import "./Resume.scss";
import {resumeSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Resume() {
  const {isDark} = useContext(StyleContext);
  
  function openResumeInNewTab() {
    if (!resumeSection.resumeLink) {
      return;
    }
    var win = window.open(resumeSection.resumeLink, "_blank");
    win.focus();
  }

  if (!resumeSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="resume">
        <div className="resume-mini-container">
          <button
            className={
              isDark
                ? "dark-mode resume-mini-button"
                : "resume-mini-button"
            }
            onClick={openResumeInNewTab}
          >
            <i className="fas fa-download"></i>
            Download Resume
          </button>
        </div>
      </div>
    </Fade>
  );
} 