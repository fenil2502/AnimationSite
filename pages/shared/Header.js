import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header-inner">
            <img src="./BMW-logo.png" alt="BMW" />
            <div className="menu-links">
              <Link href="/">Home</Link>
              <Link href="/bmw">BMW</Link>
              <Link href="/rangerover">Range Rover</Link>
            </div>
            <img src="./LandRover-logo.png" alt="Land Rover" />
          </div>
        </div>
        <div className="mobile-menu">
          <div className="container">
            <div className="mobile-menu-inner">
              <Link href="/">Home</Link>
              <Link href="/bmw">BMW</Link>
              <Link href="/rangerover">Range Rover</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
