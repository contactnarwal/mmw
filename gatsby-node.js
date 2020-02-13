const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const porfolios = require("./src/content/portfolio.js")

  // Create porfolio page
  createPage({
    path: `/portfolio`,
    component: path.resolve("./src/templates/Portfolio.js"),
    context: { porfolios },
  })

  // Create porfolio details page
  porfolios.forEach(portfolio => {
    createPage({
      path: `/portfolio/${portfolio.path}`,
      component: require.resolve("./src/templates/single-portfolio.js"),
      context: { portfolio, image: portfolio.image },
    })
  })

  const Blogs = require("./src/content/blog.js")
  createPage({
    path: "/blog",
    component: path.resolve("./src/templates/BlogList.js"),
    context: { Blogs },
  })

  /*
  return graphql(`
    {
      allWordpressPost {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve("./src/layouts/SingleBlog.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  
    const posts = result.data.allWordpressPost.nodes
    const postsPerPage = 9
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/${i + 1}`,
        component: path.resolve("./src/pages/index.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  }) */
}
