import React from "react";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <a
        href="https://github.com/FredrikOseberg/react-chatbot-kit"
        target="_blank"
        rel="noopener noreferrer"
        className="menu-link"
      >
        Github
      </a>
      <a
        href="https://www.npmjs.com/package/react-chatbot-kit"
        className="menu-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        NPM
      </a>
      <a href="#examples" className="menu-link">
        Examples
      </a>
      <a href="#tutorials" className="menu-link">
        Tutorials
      </a>
    </div>
  );
};

export default Menu;
