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
          <h1>Hello, I'm</h1>
          <h1>Jamie Andrews</h1>
          <p><a href="mailto:andrews_j@live.co.uk">Email me @</a></p>
          <Link to="/projects" className={styles.btn}>My Portfolio Projects</Link>
        </div>
        <GatsbyImage className={styles.image} image={data.file.childImageSharp.gatsbyImageData} alt={"picture"}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
query People {
  file(relativePath: {eq: "me.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, height:400, placeholder: BLURRED)
    }
  }
}`