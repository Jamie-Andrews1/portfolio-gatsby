import React, { useEffect } from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import useLocalStorage from "use-local-storage";
import SwitchTheme from "./SwitchTheme";
import { Helmet } from 'react-helmet'

export default function Layout({ children }) {
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

const [check, setCheck] = useLocalStorage('checkbox', true)

useEffect(() => {
  window.__theme = theme
  
  if (theme === 'dark') {
    document.documentElement.className = 'dark';
  } else {
    document.documentElement.className = '';
  }
}, [theme, check])

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.className = 'dark'
      setTheme('dark')
      setCheck(true)
  }
  else {
      document.documentElement.className = ''
      setTheme('light')
      setCheck(false)
  }    
}

  return (
    <div className='wrapper'>
      <Helmet className="title" title={'Welcome! 😎'} defer={false}/>
      <Navbar/>
      <SwitchTheme className="switch" switchTheme={switchTheme} theme={theme}/>
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Copyright 2022 Jamie</p>
      </footer>
      </div>
  )
}
