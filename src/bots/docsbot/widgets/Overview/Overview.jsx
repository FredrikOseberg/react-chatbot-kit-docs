import React from "react";
import { FadeIn } from "react-anim-kit";

import { ReactComponent as OverviewSVG } from "../../../../assets/img/bot-overview.svg";

import styles from "./Overview.module.css";
import GeneralOptions from "../options/GeneralOptions/GeneralOptions";

const Overview = ({ actionProvider }) => {
  return (
    <div className={styles.overview}>
      <FadeIn left by={250}>
        <OverviewSVG className={styles.overviewSVG} />
      </FadeIn>

      <GeneralOptions actionProvider={actionProvider} />
    </div>
  );
};

export default Overview;
