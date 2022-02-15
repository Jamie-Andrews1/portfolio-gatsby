import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import '../styles/global.css'

export default function Navbar() {
  const data = useStaticQuery(graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
      }
    }
  }`)
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h2><Link to='/'>{ title }</Link></h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
        <a href={`Jamie1 cv.pdf`} 
        rel="noreferrer"
        target="_blank">CV</a>
      </div>
    </nav>
  )
}
