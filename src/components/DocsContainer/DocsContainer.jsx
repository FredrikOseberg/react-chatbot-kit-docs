import React from "react";

import "./DocsContainer.css";

const DocsContainer = ({ icon, title, children }) => {
  return (
    <div className="app-docs-container">
      <h1 className="app-docs-container-header">
        {icon} {title}
      </h1>
      {children}
    </div>
  );
};

export default DocsContainer;
