import React from "react";

import "./TutorialSection.css";

const TutorialSection = () => {
  return (
    <div className="tutorial-section" id="tutorials">
      <h2 className="tutorial-header">Tutorials</h2>
      <div className="tutorial-container">
        <div className="tutorial-yt-container">
          <iframe
            width="300"
            height="175"
            src="https://www.youtube.com/embed/AeojRYwfAMo"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Basic setup"
          ></iframe>
          <iframe
            width="300"
            height="175"
            src="https://www.youtube.com/embed/QbIF_XRPTGk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Exploring Config"
          ></iframe>
          <iframe
            width="300"
            height="175"
            src="https://www.youtube.com/embed/VLKKjxGHiT8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Exploring the message parser"
          ></iframe>

          <iframe
            width="300"
            height="175"
            src="https://www.youtube.com/embed/DOOxcEO3KGY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Exploring the actionprovider"
          ></iframe>
          <iframe
            width="300"
            height="175"
            src="https://www.youtube.com/embed/2nwglgYrotI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Custom CSS rules"
          ></iframe>
          <iframe
            width="300"
            height="175"
            src="https://www.youtube.com/embed/YGXXITnXvYU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Data fetching and widgets"
          ></iframe>
          <iframe
            width="300"
            height="175"
            src="https://www.youtube.com/embed/vTpk-PKZwTs"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="How to build a chatbot in react"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TutorialSection;
