import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from '../SEO/SEO';
import Layout from '../Layout/Layout';
import Background from '../Background/Background';
import Banner from '../Banner/Banner';
import resume from '../../resume/Resume.pdf';

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

const Resume = () => {
  const { image } = useStaticQuery(getImage);
  const { fluid } = image.childImageSharp;

  return (
    <Layout>
      <SEO title="Resume" />
      <Background image={fluid}>
        <Banner title="My Resume" />
      </Background>
      <div style={{ margin: 'auto' }}>
        <embed src={resume} width="600" height="500" />
        {/* <iframe src={resume} height="100%" width="100%" /> */}
      </div>
    </Layout>
  );
};

export default Resume;
