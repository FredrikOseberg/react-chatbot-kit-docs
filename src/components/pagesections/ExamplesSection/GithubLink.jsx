import React from "react";

import { ReactComponent as GithubIcon } from "../../../assets/icons/github.svg";

const GithubLink = ({ link, linkText }) => {
  return (
    <a
      href={link}
      className="app-github-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon className="app-github-link-icon" />
      {linkText}
    </a>
  );
};

export default GithubLink;
