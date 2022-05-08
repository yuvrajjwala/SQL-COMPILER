import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme'
import './Navbar.css'


const Navbar = () => {
  const [{ theme, ColorName }, toggleTheme] = useContext(ThemeContext)
  return (
    <div>
      <nav className='navbar-container' style={{ background: theme.backgroundColor, color: theme.color }}>
        <div>SQL COMPILER</div>
        <div id='atlan-logo-text'>atlan</div>
      </nav>
      <div>
      </div>
    </div>
  )
}

export default Navbar