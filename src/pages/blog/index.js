import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
          }
          id
          excerpt
        }
      }
    }
  `)

  return (
    <Layout>
      <p>Esses são os últimos posts:</p>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const Head = () => <title>Posts</title>

export default BlogPage