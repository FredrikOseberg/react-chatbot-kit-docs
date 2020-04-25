import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";

import GistContainer from "../../GistContainer/GistContainer";

import { ReactComponent as MessageParserOverview } from "../../../../assets/img/message-parser-overview.svg";

import styles from "./MessageParserDocs.module.css";
import InformationBox from "../../InformationBox/InformationBox";

const MessageParserDocs = ({ gist, infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      gist: "messageParser",
      infoBox: "messageParser",
    }));
  }, [setState]);

  const showMessageParserGist = gist === "messageParser";
  const showMessageParserInfoBox = infoBox === "messageParser";

  return (
    <div className={styles.overview}>
      <FadeIn left by={250}>
        <MessageParserOverview className={styles.overviewSVG} />
      </FadeIn>

      <ConditionallyRender
        ifTrue={showMessageParserGist}
        show={<GistContainer gistId="161bbcc7220ded5de7a1fce834d7fe99" />}
      />

      <ConditionallyRender
        ifTrue={showMessageParserInfoBox}
        show={
          <InformationBox>
            <p className={styles.infoBoxParagraph}>
              You have to write your own messageparser. The beauty of this is
              that you have full control over how you want to parse messages
              from the user. You can make it as complex or simple as you want.
              The simplest version is to check for keywords with javascript
              .includes()
            </p>
            <p className={styles.infoBoxParagraph}>
              Once you pass the messageparser to the chatbot, it will initialize
              it with the actionprovider you provided, so that you can determine
              which action after you have parsed the message.
            </p>
          </InformationBox>
        }
      />
    </div>
  );
};

export default MessageParserDocs;
