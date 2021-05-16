import { graphql, Link } from "gatsby";
import React from "react";
import Layout from  '../components/Layout';
import * as styles from '../styles/home.module.css';
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Web</h2>
          <h3>Jamie Andrews</h3>
          <p>Web Developing and UX Design</p>
          <Link to="/projects" className={styles.btn}>My Portfolio Project</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt={data.file.childImageSharp.gatsbyImageData.images.fallback.src} />
      </section>
    </Layout>
  )
}

export const query = graphql`
query People {
  file(relativePath: {eq: "people.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`