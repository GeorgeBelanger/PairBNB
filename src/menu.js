import React from 'react'
import { Link } from 'react-router-dom'
import './assets/css/main.css'

const Menu = () => (
  <div>
    {/* Header */}
    <header id='header' className='alt'>
      <a href='index.html' className='logo' style={{ marginTop: 15 }}>
        <h3>
          <strong>PairBNB</strong>
        </h3>
      </a>
      <nav>
        <a href='#menu'>Menu</a>
      </nav>
    </header>
    {/* Menu */}
    <nav id='menu'>
      <ul className='links'>
        <li>
          <Link to='/index'>Home</Link>
        </li>
        <li>
          <Link to='/viewlistings'>viewlistings</Link>
        </li>
        <li>
          <Link to='/generic'>Generic</Link>
        </li>
        <li>
          <Link to='/elements'>Elements</Link>
        </li>
      </ul>
      <ul className='actions stacked'>
        <li>
          <a href='#' className='button fit'>
        Log In
          </a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Menu
