import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greeting-container" id="greeting">
      <div className="greeting-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <Fade bottom duration={1000} distance="40px">
        <div className="greeting-content">
          <div className="greeting-text-section">
            <div className="greeting-header">
              <div className="greeting-badge">
                <span className="badge-text">Welcome</span>
              </div>
              <h1 className="greeting-title">
                {greeting.title}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
            </div>
            
            <div className="greeting-description">
              <p className="greeting-subtitle">{greeting.subTitle}</p>
            </div>
            
            <div className="greeting-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Internship Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
            
            <div className="greeting-actions">
              <div className="social-section">
                <span className="social-label">Connect with me</span>
                <SocialMedia />
              </div>
              
              <div className="button-section">
                <Button text="Get In Touch" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download Resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <div className="greeting-visual-section">
            <div className="visual-container">
              {illustration.animated ? (
                <div className="lottie-wrapper">
                  <DisplayLottie animationData={landingPerson} />
                </div>
              ) : (
                <div className="image-wrapper">
                  <img
                    alt="Sheraj Sharif - IT Professional"
                    src={require("../../assets/images/manOnTable.svg")}
                    className="greeting-image"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <i className="fas fa-code"></i>
                      <span>Passionate Developer</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="tech-badges">
                <div className="tech-badge">Python</div>
                <div className="tech-badge">ML/AI</div>
                <div className="tech-badge">Flutter</div>
                <div className="tech-badge">Web Dev</div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
