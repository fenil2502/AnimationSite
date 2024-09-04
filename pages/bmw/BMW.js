import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faGears,
  faHorseHead,
  faGaugeHigh,
  faGasPump,
  faUsers,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

class BMW extends Component {
  render() {
    return (
      <div className="bmw">
        <section className="hero">
          <img src="bmw-x5.jpg" alt="BMW X5" className="hero-image" />
          {/* <h1 className="hero-title">
            BMW X5:
            <br />
            The Ultimate Driving Machine
          </h1> */}
        </section>
        <section className="features">
          <div className="container">
            <div className="features-inner">
              <div className="features-img">
                <img src="BMW-features.jpg" alt="BMW Features" />
              </div>
              <div className="features-content">
                <h2>Key Features</h2>
                <ul>
                  <li>
                    <strong>Advanced Driver Assistance Systems:</strong> Enjoy
                    peace of mind with features like lane departure warning,
                    adaptive cruise control, and automatic emergency braking.
                  </li>
                  <li>
                    <strong>Spacious Interior:</strong> The BMW X5 offers ample
                    space for passengers and cargo, making it ideal for families
                    and adventurers.
                  </li>
                  <li>
                    <strong>Powerful Engine Options:</strong> Choose from a
                    range of efficient and powerful engines, including diesel
                    and gasoline options.
                  </li>
                  <li>
                    <strong>Premium Materials and Craftsmanship:</strong>{" "}
                    Experience the highest level of luxury with premium
                    materials and meticulous attention to detail.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="specifications">
          <div className="container">
            <div className="specifications-inner">
              <h2>Specifications</h2>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faGears} />
                  <p>
                    <strong>Engine:</strong>
                    <br />
                    3.0-liter inline-six turbocharged
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHorseHead} />
                  <p>
                    <strong>Horsepower:</strong>
                    <br />
                    335 hp
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGaugeHigh} />
                  <p>
                    <strong>Torque:</strong>
                    <br />
                    332 lb-ft
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGasPump} />
                  <p>
                    <strong>Fuel Economy:</strong>
                    <br />
                    22 mpg city, 28 mpg highway
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGear} />
                  <p>
                    <strong>Transmission:</strong>
                    <br />
                    8-speed automatic
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUsers} />
                  <p>
                    <strong>Seating Capacity:</strong>
                    <br />5 passengers
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faBox} />
                  <p>
                    <strong>Cargo Capacity:</strong>
                    <br />
                    33.9 cubic feet
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="cards-sec">
          <div className="container">
            <div className="cards-sec-inner">
              <div className="card">
                <div className="card-top">
                  <img src="bmw-performance.jpg" alt="BMW" />
                </div>
                <div className="card-bottom">
                  <h3>Performance</h3>
                  <p>
                    The BMW X5 delivers a thrilling driving experience with its
                    powerful engines, precise handling, and advanced
                    all-wheel-drive system.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-top">
                  <img src="bmw-luxury.jpg" alt="BMW" />
                </div>
                <div className="card-bottom">
                  <h3>Luxury and Comfort</h3>
                  <p>
                    The BMW X5 offers a luxurious interior with premium
                    materials, spacious seating, and advanced features like
                    heated and ventilated seats.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-top">
                  <img src="bmw-x5-interior.jpg" alt="BMW" />
                </div>
                <div className="card-bottom">
                  <h3>Technology</h3>
                  <p>
                    The BMW X5 features advanced tech like a large touchscreen,
                    intuitive infotainment, driver assistance, and premium
                    audio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery">
          <h2>Gallery</h2>
          <div className="image-grid">
            <img src="bmw-x5-interior.jpg" alt="BMW X5 Interior" />
            <img src="bmw-x5-exterior.jpg" alt="BMW X5 Exterior" />
            <img
              src="bmw-x5-driving.jpg"
              alt="BMW X5 Driving on a scenic road"
            />
            <img src="bmw-x5-offroad.jpg" alt="BMW X5 Off-Roading" />
            <img src="bmw-x5-night.jpg" alt="BMW X5 at night" />
          </div>
        </section>
      </div>
    );
  }
}

export default BMW;
