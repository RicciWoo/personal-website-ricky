import React from 'react';
import BackgroundImage from 'gatsby-background-image';

import styles from './Background.module.css';

const Background = ({ image, home, children }) => {
  return (
    <BackgroundImage
      className={home ? styles.homeBackground : styles.background}
      fluid={image}
    >
      {children}
    </BackgroundImage>
  );
};

export default Background;
