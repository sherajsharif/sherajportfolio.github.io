import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-header">
        <div className="certificate-badge">
          <i className="fas fa-certificate"></i>
        </div>
        <div className="certificate-image-div">
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Card Thumbnail"}
            className="card-image"
          ></img>
          <div className="image-overlay">
            <i className="fas fa-eye"></i>
          </div>
        </div>
      </div>
      
      <div className="certificate-detail-div">
        <div className="certificate-icon">
          <i className="fas fa-trophy"></i>
        </div>
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
        <div className="certificate-date">
          <i className="far fa-calendar-alt"></i>
          <span>2024</span>
        </div>
      </div>
      
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              <i className="fas fa-external-link-alt"></i>
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
