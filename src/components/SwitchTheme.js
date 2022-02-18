import React from 'react';
import '../styles/global.css'

export default function SwitchTheme({switchTheme, theme}) {

  return (
      <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" 
          onClick={switchTheme} defaultChecked={theme === 'dark' ? true : false}
          />
          <div className="slider round"></div>
    </label>
  </div>

  // Text style toggle switch
    // <button className='themeBtn' onClick={switchTheme}>Switch to {theme === 'Light' ? 'Dark' : 'Light'} Theme</button>
  )
}
