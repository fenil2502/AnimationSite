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
      <div className="range-rover">
        <section className="hero">
          <img src="range-rover.jpg" alt="Range Rover" className="hero-image" />
          {/* <h1 className="hero-title">
            Range Rover:
            <br />
            The Pinnacle of Luxury SUVs
          </h1> */}
        </section>
        <section className="features">
          <div className="container">
            <div className="features-inner">
              <div className="features-img">
                <img
                  src="Range-rover-features.jpg"
                  alt="Range Rover Features"
                />
              </div>
              <div className="features-content">
                <h2>Key Features</h2>
                <ul>
                  <li>
                    <strong>All-Terrain Capability:</strong> Conquer any terrain
                    with advanced off-road technology and suspension systems.
                  </li>
                  <li>
                    <strong>Luxurious Interior:</strong> Indulge in handcrafted
                    interiors with premium materials and refined craftsmanship.
                  </li>
                  <li>
                    <strong>Advanced Technology:</strong> Stay connected and
                    entertained with cutting-edge infotainment and driver
                    assistance systems.
                  </li>
                  <li>
                    <strong>Iconic Design:</strong> Make a statement with the
                    Range Rover's timeless and elegant design.
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
                  <img src="range-rover-performance.jpg" alt="BMW" />
                </div>
                <div className="card-bottom">
                  <h3>Performance</h3>
                  <p>
                    The Range Rover Sport delivers a thrilling performance,
                    thanks to its powerful engines, advanced all-wheel-drive
                    system, and agile handling.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-top">
                  <img src="range-rover-luxury.jpg" alt="BMW" />
                </div>
                <div className="card-bottom">
                  <h3>Luxury and Comfort</h3>
                  <p>
                    The Range Rover offers unparalleled luxury, with sumptuous
                    interiors, premium materials, and advanced amenities.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-top">
                  <img src="range-rover-interior.jpg" alt="BMW" />
                </div>
                <div className="card-bottom">
                  <h3>Technology</h3>
                  <p>
                    The Range Rover Sport offers advanced tech like a large
                    touchscreen, intuitive infotainment, driver assistance, and
                    premium audio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery">
          <h2>Gallery</h2>
          <div className="image-grid">
            <img
              src="range-rover-interior.jpg"
              alt="Range Rover Sport Interior"
            />

            <img
              src="range-rover-exterior.jpg"
              alt="Range Rover Sport Exterior"
            />

            <img
              src="range-rover-off-road.jpg"
              alt="Range Rover Sport Off-Road"
            />

            <img src="range-rover-drive.jpg" alt="Range Rover Sport Drive" />

            <img
              src="range-rover-sunlight.jpg"
              alt="Range Rover Sport at sunlight"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default BMW;
