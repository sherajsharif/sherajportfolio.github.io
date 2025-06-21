import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="contact-container" id="contact">
        <div className="contact-header">
          <h1 className="contact-title">{contactInfo.title}</h1>
          <p className="contact-subtitle">{contactInfo.subtitle}</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-cards">
              <div className="contact-card">
                <i className="fas fa-phone contact-icon"></i>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href={`tel:${contactInfo.number}`}>{contactInfo.number}</a>
                </div>
              </div>
              
              <div className="contact-card">
                <i className="fas fa-envelope contact-icon"></i>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href={`mailto:${contactInfo.email_address}`}>{contactInfo.email_address}</a>
                </div>
              </div>
              
              <div className="contact-card">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <div className="contact-details">
                  <h3>Location</h3>
                  <span>India</span>
                </div>
              </div>
            </div>
            
            <div className="contact-actions">
              <a href={`mailto:${contactInfo.email_address}`} className="contact-btn primary">
                <i className="fas fa-envelope"></i>
                Send Message
              </a>
              <a href={`tel:${contactInfo.number}`} className="contact-btn secondary">
                <i className="fas fa-phone"></i>
                Call Now
              </a>
            </div>
          </div>
          
          <div className="contact-visual">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Contact"
                src={require("../../assets/images/contactMail.webp")}
                className="contact-image"
              />
            )}
          </div>
        </div>
        
        <div className="contact-social">
          <h3>Let's Connect</h3>
          <SocialMedia />
        </div>
      </div>
    </Fade>
  );
}
