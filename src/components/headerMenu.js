import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderMenu = () => {
  return (
    <React.Fragment>
      {/* Header */}
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, user-scalable=no'
      />
      <header id='header' className='alt'>
        <NavLink to='/' className='logo' style={{ marginTop: 15 }}>
          <h3>
            <strong>PairBNB</strong>
          </h3>
        </NavLink>
        <nav>
          <a href='#menu'>Menu</a>
        </nav>
      </header>
      {/* End Header */}
      {/* Menu */}
      <nav id='menu'>
        <ul className='links'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
      {/* End Menu */}
    </React.Fragment>
  )
}

export default HeaderMenu
