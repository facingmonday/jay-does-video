import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  items: 1,
  dots: true,
  autoplay: true,
  smartSpeed: 1500,
  autoplayHoverPause: true,
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
};

const HeroSlider = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="hero-slider-area">
      {display ? (
        <OwlCarousel
          className="hero-slider-wrap owl-carousel owl-theme"
          {...options}
        >
          <div className="hero-slider-item bg-1">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="hero-slider-text one">
                    <h1>We Make A Awesome Branded Videos</h1>
                    <p>High-quality video production</p>

                    <div className="slider-btn">
                      <Link href="/work">
                        <a className="default-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slider-item bg-2">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="hero-slider-text two">
                    <h1>We Work Globally Brilliantly Done</h1>
                    <p>High-quality video production</p>

                    <div className="slider-btn">
                      <Link href="/work">
                        <a className="default-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slider-item bg-3">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="hero-slider-text three">
                    <h1>Introducing The Next Level Of Video Production</h1>
                    <p>High-quality video production</p>

                    <div className="slider-btn">
                      <Link href="/work">
                        <a className="default-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      ) : ''}

      {/* Social Wrap */}
      <div className="social-wrap">
        <ul>
          <li className="follow-us">
            Follow Us:
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="bx bxl-twitter" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="bx bxl-instagram" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="bx bxl-facebook" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="bx bxl-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSlider;
