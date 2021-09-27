import React from 'react';
import Gist from 'react-gist';

import GradientBackground from '../../GradientBackground/GradientBackground';
import Logo from '../../../assets/icons/logo.svg';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeSection}>
      <GradientBackground>
        <Logo
          style={{
            paddingTop: '40px',
            height: '150px',
            width: '150px',
            margin: '2rem auto',
            display: 'block',
          }}
        />
        <h1 className={styles.appHeader}>React-chatbot-kit</h1>
        <div className={styles.appNpmInstall}>
          npm install react-chatbot-kit
        </div>
        <div className={styles.appOverview}>
          <h2 className={styles.appHeader}>Overview</h2>
          <p className={styles.appParagraph}>
            The chatbot works by importing it and giving it a
            messageparser, a config and an actionprovider. Scroll on to
            view more information about each part. Or ask the bot.
          </p>
          <div className={styles.appOverviewGistContainer}>
            <Gist id='21ad31cad1298ead0115719cce8587f0' />
          </div>

          <h2 className={styles.appHeader}>Quickstart</h2>
          <p className={styles.appParagraph}>
            To get started quickly, check out the following gist to get a
            scaffold for each part you need to provide to the chatbot.
          </p>
          <a
            href='https://gist.github.com/FredrikOseberg/c1e8ec83ade6e89ca84882e33caf599c'
            className={styles.appQuickstartButton}
            target='_blank'
            rel='noopener noreferrer'
          >
            Go to gist
          </a>
        </div>
      </GradientBackground>
    </div>
  );
};

export default Home;
