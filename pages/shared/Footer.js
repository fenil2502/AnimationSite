import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-inner">
          <div className="container">
            <div className="footer-logos">
              <img src="./BMW-logo.png" alt="BMW" />
              <img src="./LandRover-logo.png" alt="Land Rover" />
            </div>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/bmw">BMW</Link>
              <Link href="/rangerover">Range Rover</Link>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <p>
              &copy; 2024{" "}
              <a
                href="https://www.fenilpatel.in/"
                target="_blank"
                rel="noreferrer"
              >
                Fenil
              </a>{" "}
              &{" "}
              <a
                href="https://www.virenpatel.in/"
                target="_blank"
                rel="noreferrer"
              >
                Viren
              </a>
              . All rights ae reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
