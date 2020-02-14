import React from 'react';
import { graphql } from 'gatsby';

import styles from './solution.module.css';
import Layout from '../../components/Layout/Layout';

export default ({ data }) => {
  const solution = data.markdownRemark;

  return (
    <Layout>
      <div className={styles.solution}>
        <div dangerouslySetInnerHTML={{ __html: solution.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($index: Int!) {
    markdownRemark(frontmatter: { index: { eq: $index } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
