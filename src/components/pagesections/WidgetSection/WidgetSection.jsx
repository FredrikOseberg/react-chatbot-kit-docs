import React from "react";
import Gist from "react-gist";

import DocsContainer from "../../DocsContainer/DocsContainer";

import { ReactComponent as MessagesIcon } from "../../../assets/icons/comment-alt-dots.svg";

import "./WidgetSection.css";

const WidgetSection = () => {
  return (
    <div className="app-widget-section">
      <div className="app-widget-section-docs-container">
        <div className="app-widget-section-docs-inner-container">
          <DocsContainer
            title="Widgets"
            icon={<MessagesIcon className="app-widget-section-icon" />}
          >
            <p>
              Widgets are custom components that you can render with chatbot
              messages.
            </p>
            <p>
              In order to use widgets, you need to register them in the config.
              Here you will define the following properties:
            </p>
            <ul className="app-widget-section-docs-list">
              <li className="app-widget-section-docs-listitem">
                widgetName - defines the name of the widget
              </li>
              <li className="app-widget-section-docs-listitem">
                widgetFunc - define a function that returns the component. The
                function must take props and spread it into the component.
              </li>
              <li className="app-widget-section-docs-listitem">
                mapStateToProps - defines which state properties you defined in
                config should be injected into the widget component.
              </li>
              <li className="app-widget-section-docs-listitem">
                props - option array of props you want to pass to your
                component.
              </li>
            </ul>

            <p>
              When the widget component is rendered it will receive the
              following props:
            </p>
            <ul className="app-widget-section-docs-list">
              <li className="app-widget-section-docs-listitem">
                actionProvider - the actionprovider class you have defined, so
                you can trigger other actions from your custom components.
              </li>
              <li className="app-widget-section-docs-listitem">
                setState - setState function that can manipulate the top level
                chatbot state.
              </li>
              <li className="app-widget-section-docs-listitem">
                scrollIntoView - helper function to scroll content into view
                when doing asynchronous calls, use in combination with useEffect
                when updating to state to ensure that the chat window is
                scrolled to bottom.
              </li>
              <li className="app-widget-section-docs-listitem">
                [state] - any piece of state you defined in the mapStateToProps
                section of the config. The name of the prop will be the same as
                the property name defined in "mapStateToProps".
              </li>
              <li className="app-widget-section-docs-listitem">
                [props] - any piece of props you defined in the props section of
                the config.
              </li>
            </ul>
          </DocsContainer>
          <a
            href="https://gist.github.com/FredrikOseberg/7fad0e5c1458559c544de6f0dd41e602#file-widget"
            target="_blank"
            rel="noopener noreferrer"
            className="app-gists-link-dark"
          >
            Go to gist
          </a>
        </div>
      </div>

      <div className="app-widget-section-gist-container">
        <Gist id="7fad0e5c1458559c544de6f0dd41e602" />
      </div>
    </div>
  );
};

export default WidgetSection;
