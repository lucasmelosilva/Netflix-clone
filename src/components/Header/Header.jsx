import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img src="https://en.wikipedia.org/wiki/Netflix#/media/File:Netflix_2015_logo.svg" alt="" />
        </a>
      </div>
    </header>
  )
}

export default Header;