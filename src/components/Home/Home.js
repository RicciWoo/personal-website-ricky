import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from '../SEO/SEO';
import Layout from '../Layout/Layout';
import Background from '../Background/Background';
import Banner from '../Banner/Banner';

const getImage = graphql`
  query {
    image: file(relativePath: { eq: "home.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Home = () => {
  const { image } = useStaticQuery(getImage);
  const { fluid } = image.childImageSharp;

  return (
    <Layout>
      <SEO title="Home" />
      <Background image={fluid} home>
        <Banner
          title="Continue Exploring"
          info='"We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures that we can have if only we seek them with our eyes open." -- Jawaharlal Nehru'
        >
          <AniLink to="/leetcode" className="btnWhite">
            LeetCode Solutions
          </AniLink>
        </Banner>
      </Background>
    </Layout>
  );
};

export default Home;
