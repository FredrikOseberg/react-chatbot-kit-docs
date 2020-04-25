import React from "react";

import styles from "./GradientBackground.module.css";

const GradientBackground = (props) => {
    return <div className={styles.gradient}>{props.children}</div>;
};

export default GradientBackground;
