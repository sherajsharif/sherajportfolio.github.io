import React from "react";
import "./WhatsApp.scss";

const WhatsApp = () => {
  return (
    <div className="whatsapp-main">
      <div className="whatsapp-container">
        <a href="https://api.whatsapp.com/send/?phone=916260132440&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <img src={require("../../assets/images/whatsapp-logo.png")} alt="Chat on WhatsApp" className="whatsapp-logo" />
        </a>
        <h2 className="whatsapp-title">Let's Connect!</h2>
        <p className="whatsapp-subtitle">Click the logo to chat with me on WhatsApp.</p>
      </div>
    </div>
  );
};

export default WhatsApp; 