import React from 'react';
import '../styles/global.css'

export default function SwitchTheme({switchTheme, theme}) {

  return (
    <button className='themeBtn' onClick={switchTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme</button>
  )
}
