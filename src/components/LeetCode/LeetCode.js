import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from '../SEO/SEO';
import Layout from '../Layout/Layout';
import Background from '../Background/Background';
import Banner from '../Banner/Banner';
import Solutions from './Solutions/Solutions';

const getImage = graphql`
  query {
    image: file(relativePath: { eq: "background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const LeetCode = () => {
  const { image } = useStaticQuery(getImage);
  const { fluid } = image.childImageSharp;

  return (
    <Layout>
      <SEO title="LeetCode" />
      <Background image={fluid}>
        <Banner title="LeetCode Solutions" />
      </Background>
      <Solutions />
    </Layout>
  );
};

export default LeetCode;
