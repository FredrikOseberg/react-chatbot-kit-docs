import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { ConditionallyRender } from 'react-util-kit';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import config from '../bots/docsbot/config';
import ActionProvider from '../bots/docsbot/ActionProvider';
import MessageParser from '../bots/docsbot/MessageParser';
import ButtonIcon from '../assets/icons/robot.svg';

import HomeSection from '../components/pagesections/Home/Home';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/chatbot.svg',
    description: (
      <>
        React-chatbot-kit was designed as a way to get started building
        chatbots on the frontend in a quick and easy manner.
      </>
    ),
  },
  {
    title: 'Modular design',
    imageUrl: 'img/blocks.svg',
    description: (
      <>
        Extend the chatbot with custom widgets, that are just regular old
        react components.
      </>
    ),
  },
  {
    title: 'Open source',
    imageUrl: 'img/open.svg',
    description: (
      <>Fully open source. Free to use for you and your project forever.</>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const [showChatbot, toggleChatbot] = useState(true);
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomeSection />
      <div className={styles.appChatbotContainer}>
        <ConditionallyRender
          ifTrue={showChatbot}
          show={
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              validator={(input) => {
                if (input.length > 3) return true;
                return false;
              }}
              customProperty={'Hello world'}
            />
          }
        />
        <button
          className={styles.appChatbotButton}
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className={styles.appChatbotButtonIcon} />
        </button>
      </div>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
