import React from "react";

import styles from "./InformationBox.module.css";

import { ReactComponent as LightBulb } from "../../../../assets/icons/lightbulb-on.svg";
import { ReactComponent as Cross } from "../../../../assets/icons/times-circle.svg";

const InformationBox = ({ children, setState }) => {
  return (
    <div className={styles.informationBox}>
      <button
        className={styles.closeMessageBox}
        onClick={() => setState((state) => ({ ...state, infoBox: "" }))}
      >
        <Cross className={styles.closeMessageBoxIcon} />
      </button>
      <LightBulb className={styles.informationBoxLogo} />
      <div className={styles.informationBoxContent}>{children}</div>
    </div>
  );
};

export default InformationBox;
