const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      solutions: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              index
            }
          }
        }
      }
    }
  `);

  data.solutions.edges.forEach(({ node }) => {
    createPage({
      path: `/solutions/${node.frontmatter.index}`,
      component: path.resolve('./src/templates/solution/solution.js'),
      context: {
        index: node.frontmatter.index,
      },
    });
  });
};
