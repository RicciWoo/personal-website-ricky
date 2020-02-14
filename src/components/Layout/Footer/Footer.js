import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from './Footer.module.css';
import links from '../../../constants/Links';
import socialLinks from '../../../constants/SocialLinks';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.text}
            </AniLink>
          );
        })}
      </div>
      <div className={styles.icons}>
        {socialLinks.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
      <div className={styles.copyright}>
        {' '}
        Copyright &copy; Ricky Wu {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
