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
          <h2>UI</h2>
          <h3>Jamie Andrews</h3>
          <p><a href="mailto:andrews_j@live.co.uk">Email me @</a></p>
          <Link to="/projects" className={styles.btn}>My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt={data.file.childImageSharp.gatsbyImageData.images.fallback.src} />
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L18.5,64C36.9,64,74,64,111,90.7C147.7,117,185,171,222,192C258.5,213,295,203,332,186.7C369.2,171,406,149,443,154.7C480,160,517,192,554,197.3C590.8,203,628,181,665,170.7C701.5,160,738,160,775,160C812.3,160,849,160,886,160C923.1,160,960,160,997,144C1033.8,128,1071,96,1108,80C1144.6,64,1182,64,1218,69.3C1255.4,75,1292,85,1329,90.7C1366.2,96,1403,96,1422,96L1440,96L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
      </section>
    </Layout>
  )
}

export const query = graphql`
query People {
  file(relativePath: {eq: "programming.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`