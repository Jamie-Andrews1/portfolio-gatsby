import React from "react"
import "../styles/global.css"

export default function SwitchTheme({ switchTheme, theme }) {
  if (typeof window === "undefined") {
    return null
  }
  return (
    <label className="theme-switch" htmlFor="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        tabIndex="0"
        onClick={switchTheme}
        defaultChecked={theme === "dark" ? true : false}
        aria-label="Toggle Dark Mode"
      />
      <div className="slider round"></div>
    </label>
  )
}
