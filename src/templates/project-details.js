import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';
import { GatsbyImage } from "gatsby-plugin-image"
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
        <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt={"picture"} />
      </div>
      </Link>
      <div className={styles.html} 
      dangerouslySetInnerHTML={{ __html: html }} />
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
            gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      url
    }
    html
  }
}
`