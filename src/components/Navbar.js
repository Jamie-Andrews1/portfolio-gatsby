import React, {useState, useEffect, useRef } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import '../styles/global.css'

export default function Navbar() {
  const [check ,setCheck] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    function handleClick(e) {
      if(ref.current.contains(e.target)){
        return ref.current.checked = false
      }
      return ref.current.checked = false

    }
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const data = useStaticQuery(graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
      }
    }
  }`)
  const { title } = data.site.siteMetadata

  function toggle(value){
    return !value
  }
  
  return (
    <div>
    <label className='hamburger-menu'>
        <input ref={ref} type='checkbox' checked={check} onChange={() => setCheck(toggle)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setCheck(toggle)
          }
          if(event.key === "Escape") setCheck(false)
        }}
          />
    </label>
    <aside className='menu'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
        <Link to="/contact">Contact</Link>
        <a href={`Jamie1 cv.pdf`} 
        rel="noreferrer"
        target="_blank">CV</a>
    </aside>
    <nav>
      <h2><Link to='/'>{ title }</Link></h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
        <Link to="/contact">Contact</Link>
        <a href={`Jamie1 cv.pdf`} 
        rel="noreferrer"
        target="_blank">CV</a>
      </div>   
    </nav>
    </div>
  )
}
