import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './Solutions.module.css';
// import Title from '../../Title/Title';

const getSolutions = graphql`
  query {
    solutions: allMarkdownRemark(sort: { fields: frontmatter___index }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            index
          }
        }
      }
    }
  }
`;

const Solutions = () => {
  const { solutions } = useStaticQuery(getSolutions);

  return (
    <div className={styles.solutions}>
      {/* <Title title="LeetCode Solutions" /> */}
      <h4>{solutions.totalCount} Solutions</h4>
      {solutions.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <AniLink
              fade
              to={`/solutions/${node.frontmatter.index}`}
              className={styles.link}
            >
              <h3>{node.frontmatter.title}</h3>
            </AniLink>
          </div>
        );
      })}
    </div>
  );
};

export default Solutions;
