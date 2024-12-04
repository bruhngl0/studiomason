import React from 'react';
import "../styles/header.scss"

const Header = () => {
  return (
    <header className='header'>
        <nav className='header-nav'>
            <a href="/">Home</a>
            <a href="/screen-six-int">Products</a>
            <a href="/baw-studio">BeSpoke</a>
            <a href="/servicess">Enquiry</a>
            
        </nav>
    </header>
  );
}

export default Header;