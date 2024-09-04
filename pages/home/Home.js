import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      autoplayInterval: null,
    };

    this.slides = [
      {
        image: "bmw-hero.jpg",
        alt: "BMW X5",
        title: "BMW X5: The Ultimate Driving Machine",
        description: "Experience luxury and performance.",
      },
      {
        image: "range-rover-hero.jpg",
        alt: "Range Rover Sport",
        title: "Range Rover Sport: The Pinnacle of Luxury SUVs",
        description: "Conquer any terrain in style.",
      },
    ];
  }

  componentDidMount() {
    this.startAutoplay();
  }

  componentWillUnmount() {
    this.stopAutoplay();
  }

  startAutoplay = () => {
    const intervalId = setInterval(() => {
      this.handleNextSlide();
    }, 4000);
    this.setState({ autoplayInterval: intervalId });
  };

  stopAutoplay = () => {
    const { autoplayInterval } = this.state;
    clearInterval(autoplayInterval);
  };

  handleNextSlide = () => {
    const { currentSlide } = this.state;
    const newSlide = (currentSlide + 1) % this.slides.length;
    this.setState({ currentSlide: newSlide });
  };

  handlePrevSlide = () => {
    const { currentSlide } = this.state;
    const newSlide =
      (currentSlide - 1 + this.slides.length) % this.slides.length;
    this.setState({ currentSlide: newSlide });
  };

  render() {
    const { currentSlide } = this.state;

    return (
      <div className="home">
        <section className="hero">
          <div className="slider">
            {this.slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${currentSlide === index ? "active" : ""}`}
              >
                <div className="banner-img">
                  <img src={slide.image} alt={slide.alt} />
                </div>
                <div className="banner-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="box-sec">
          <div className="container">
            <h2>What you get</h2>
            <div className="box-sec-inner">
              <div className="box">
                <img src="car-innovation.jpg" alt="BMW" />
                <div className="box-content">
                  <h3>Innovation</h3>
                  <p>
                    BMW and Range Rover are automotive pioneers, renowned for
                    their innovative designs and cutting-edge technology.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src="car-engine.jpg" alt="Engine" />
                <div className="box-content">
                  <h3>Performance</h3>
                  <p>
                    BMW and Range Rover are automotive pioneers, renowned for
                    their innovative designs and cutting-edge technology.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src="car-luxury.jpg" alt="BMW" />
                <div className="box-content">
                  <h3>Luxury</h3>
                  <p>
                    BMW and Range Rover are automotive pioneers, renowned for
                    their innovative designs and cutting-edge technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="zigzag">
          <div className="container">
            <div className="zigzag-inner">
              <div className="zigzag-img">
                <img src="BMW-exterior.jpg" alt="BMW X5" />
              </div>
              <div className="zigzag-content">
                <h2>BMW X5</h2>
                <p>
                  The BMW X5 is the epitome of luxury and performance. With its
                  spacious interior, advanced technology, and powerful engine
                  options, it&apos;s the perfect SUV for those who demand the
                  best. Whether you&apos;re commuting to work, embarking on a
                  family adventure, or simply enjoying a leisurely drive, the
                  BMW X5 offers an unparalleled driving experience
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="zigzag-rev">
          <div className="container">
            <div className="zigzag-rev-inner">
              <div className="zigzag-rev-img">
                <img src="RangeRover-exterior.jpg" alt="Range Rover Sport" />
              </div>
              <div className="zigzag-rev-content">
                <h2>Range Rover Sport</h2>
                <p>
                  The Range Rover Sport combines the luxury of a Range Rover
                  with the performance of a sports car. Its powerful engines,
                  advanced off-road capabilities, and sophisticated interior
                  make it the ultimate choice for those who demand the best.
                  Whether you&apos;re exploring rugged terrain or cruising down
                  the highway, the Range Rover Sport delivers an exhilarating
                  driving experience
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-sec">
          <div className="container">
            <div className="gallery-sec-inner">
              <h2>Gallery</h2>
              <div className="gallery-upper">
                <div className="itemLeft item1">
                  <img src="bmw-x5-interior.jpg" alt="BMW" />
                </div>
                <div className="itemLeft item2">
                  <img src="bmw-x5-exterior.jpg" alt="BMW" />
                </div>
                <div className="itemLeft item3">
                  <img src="bmw-x5-driving.jpg" alt="BMW" />
                </div>
                <div className="itemLeft item4">
                  <img src="bmw-x5-offroad.jpg" alt="BMW" />
                </div>
                <div className="itemLeft item5">
                  <img src="bmw-x5-night.jpg" alt="BMW" />
                </div>
              </div>
              <div className="gallery-lower">
                <div className="itemRight item1">
                  <img
                    src="range-rover-interior.jpg"
                    alt="Range Rover"
                  />
                </div>
                <div className="itemRight item2">
                  <img
                    src="range-rover-exterior.jpg"
                    alt="Range Rover"
                  />
                </div>
                <div className="itemRight item3">
                  <img
                    src="range-rover-off-road.jpg"
                    alt="Range Rover"
                  />
                </div>
                <div className="itemRight item4">
                  <img
                    src="range-rover-drive.jpg"
                    alt="Range Rover"
                  />
                </div>
                <div className="itemRight item5">
                  <img
                    src="range-rover-sunlight.jpg"
                    alt="Range Rover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
