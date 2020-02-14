import React, { useState } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaAlignRight } from 'react-icons/fa';

import styles from './Navbar.module.css';
import logo from '../../../images/logo.png';
import links from '../../../constants/Links';
import socialLinks from '../../../constants/SocialLinks';

const Navbar = () => {
  const [isOpen, setNav] = useState(false);

  const toggleNav = () => {
    setNav(isOpen => !isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="Ricky Wu logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink fade to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            );
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialLinks.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blanl"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
