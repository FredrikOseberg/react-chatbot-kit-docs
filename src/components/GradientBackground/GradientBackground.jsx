import React from "react";

import "./GradientBackground.css";

const GradientBackground = (props) => {
  return <div className="app-gradient">{props.children}</div>;
};

export default GradientBackground;
