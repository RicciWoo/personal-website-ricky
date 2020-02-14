import React from 'react';

import styles from './Title.module.css';

const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <h4>{title}</h4>
    </div>
  );
};

export default Title;
