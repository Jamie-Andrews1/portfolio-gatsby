import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import * as styles from '../styles/project-details.module.css'

export default function projectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg, url } = data.markdownRemark.frontmatter
  return (
    <Layout>
    <div className={styles.details}>
      <h2>{title}</h2>
      <h3>{stack}</h3>
      <Link to={url}>
      <div className={styles.featured}>
        <Img fluid={featuredImg.childImageSharp.fluid} />
      </div>
      </Link>
      <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}, featuredImg: {}}) {
    frontmatter {
      title
      stack
      featuredImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      url
    }
    html
  }
}
`
