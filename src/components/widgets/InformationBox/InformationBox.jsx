import React from "react";

import styles from "./InformationBox.module.css";

import { ReactComponent as LightBulb } from "../../../assets/icons/lightbulb-on.svg";

const InformationBox = ({ children }) => {
  return (
    <div className={styles.informationBox}>
      <LightBulb className={styles.informationBoxLogo} />
      <div className={styles.informationBoxContent}>{children}</div>
    </div>
  );
};

export default InformationBox;
