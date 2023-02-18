import { graphql, Link } from "gatsby";
import React from "react";
import Layout from  '../components/Layout';
import * as styles from '../styles/home.module.css';
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home({ data }) {

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Hello, I'm</h1>
          <h1>Jamie Andrews</h1>
          <p><a href="mailto:andrews_j@live.co.uk">Email me @</a></p>
          <Link to="/projects" className={styles.btn}>My Portfolio Projects</Link>
          <a href="https://github.com/Jamie-Andrews1" >
          <FontAwesomeIcon className="fa-brands fa-github fa-2x" icon={faGithub} />
          </a>
        </div>
        <GatsbyImage className={styles.image} image={data.file.childImageSharp.gatsbyImageData} alt={"picture"}/>
      </section>
        <div className="wrap" >
          <div className="el-wrap x">
            <div className="el y"></div>
          </div>
          <div className="el-wrap x2">
            <div className="el y"></div>
          </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
query People {
  file(relativePath: {eq: "programming.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
}`