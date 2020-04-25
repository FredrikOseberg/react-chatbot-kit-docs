import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";

import { ReactComponent as OverviewSVG } from "../../../assets/img/bot-overview.svg";

import GistContainer from "../GistContainer/GistContainer";

import styles from "./Overview.module.css";
import GeneralOptions from "../../options/GeneralOptions/GeneralOptions";

const Overview = ({ setState, gist, actionProvider }) => {
  useEffect(() => {
    setState((state) => ({ ...state, gist: "overview" }));
  }, [setState]);

  const showOverviewGist = gist === "overview";

  return (
    <div className={styles.overview}>
      <FadeIn left by={250}>
        <OverviewSVG className={styles.overviewSVG} />
      </FadeIn>

      <ConditionallyRender
        ifTrue={showOverviewGist}
        show={<GistContainer gistId="21ad31cad1298ead0115719cce8587f0" />}
      />
      <GeneralOptions actionProvider={actionProvider} />
    </div>
  );
};

export default Overview;
