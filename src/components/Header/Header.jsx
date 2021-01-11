import React from 'react'
import './header.css'

const Header = ({ text }) => {
  return (
    <div>
      <div className='text-header'>
        <h1>{text}</h1>
      </div>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '50px', width: '100%'}}>
        <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#1970d6'}}></path>
      </svg>
  </div>
  )
}

export default Header