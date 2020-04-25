import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";
import Gist from "react-gist";

import GistContainer from "../../GistContainer/GistContainer";

import { ReactComponent as ActionProviderOverview } from "../../../../assets/img/actionprovider-overview.svg";

import styles from "./ActionProviderDocs.module.css";
import InformationBox from "../../InformationBox/InformationBox";

const ActionProviderDocs = ({ gist, infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      gist: "actionProvider",
      infoBox: "actionProvider",
    }));
  }, [setState]);

  const showActionProviderGist = gist === "actionProvider";
  const showActionProviderInfoBox = infoBox === "actionProvider";

  return (
    <div>
      <FadeIn left by={250}>
        <ActionProviderOverview className={styles.overviewSVG} />
      </FadeIn>

      <ConditionallyRender
        ifTrue={showActionProviderGist}
        show={<GistContainer gistId="9c994790c6dd76f3d1d9dffac59ef2bb" />}
      />

      <ConditionallyRender
        ifTrue={showActionProviderInfoBox}
        show={
          <InformationBox>
            <p className={styles.infoBoxParagraph}>
              You have to write your own actionprovider. It will contain
              functions that you want to call in response to a user input. The
              actionprovider is given to the messageparser so you can use any
              methods you provide here inside the messageparser.
            </p>
            <p className={styles.infoBoxParagraph}>
              The bots response is controlled by the createChatBotMessage
              function that is given to the actionprovider:
            </p>
            <Gist id={"2f0855a6fe8908bddc9f03db31d5caa4"} />
          </InformationBox>
        }
      />
    </div>
  );
};

export default ActionProviderDocs;
