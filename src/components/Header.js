import React from 'react'
import hamburger from '../images/hamburger.svg';
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../images/hccb-logo.png';

const Header = () => {
    return (
      <>
          {/* Header section starts here */}
    <header className="">
        <div className="logo">
            <a href="./index.html"><img src={logo} alt="" /></a>
        </div>

        {/* List starts */}
        <ul className="wow animate__animated animate__fadeInUp">
            <li><a href="#">about us</a></li>
            <li><a href="#">operations</a></li>
            <li><a href="#">careers</a></li>
            <li><a href="#">work with us</a></li>
            <li><a href="#">media centre</a></li>
            <li><a href="#">support</a></li>
        </ul>
        {/* List ends */}


        <a href="#" className="hamburger-menu"><img src={hamburger} alt="" /></a>
            </header>
          {/* Header section ends here */}
    </>
  )
}

export default Header;
