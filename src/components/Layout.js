import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import SwitchTheme from "./SwitchTheme"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  let myTheme
  if (typeof window !== `undefined`) {
    myTheme = window.__theme
  }
  const [color, setColor] = useState(myTheme)

  useEffect(() => {
    setColor(window.__theme)
    window.__onThemeChange = () => {
      setColor(window.__theme)
    }
  }, [])

  function switchTheme() {
    window.__setPreferredTheme(myTheme === "dark" ? "light" : "dark")
  }

  return (
    <div className="wrapper">
      <Helmet className="title" title={"Welcome! 😎"} defer={false} />
      <Navbar />
      <div className="theme-switch-wrapper">
        <SwitchTheme
          className="switch"
          switchTheme={switchTheme}
          theme={color}
        />
      </div>
      <div className="content">{children}</div>
      <footer>
        <p>&copy; 2024 Jamie</p>
      </footer>
    </div>
  )
}
