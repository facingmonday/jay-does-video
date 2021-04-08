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
                    <h1>Cinematic music videos</h1>
                    <p>bring your music to life</p>

                    <div className="slider-btn">
                      <Link href="/portfolio">
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
                    <h1>Every frame has a story</h1>
                    <p>High-quality visual imagery</p>
                    <div className="slider-btn">
                      <Link href="/portfolio">
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
                    <h1>Next Level Video Production</h1>
                    <p>4k HDR Film</p>

                    <div className="slider-btn">
                      <Link href="/portfolio">
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
            Follow Me:
          </li>

          <li>
            <a href="https://instagram.com/jaydoesvideo" target="_blank" rel="noreferrer">
              <i className="bx bxl-instagram" />
            </a>
          </li>
          <li>
            <a href="https://tiktok.com/@jaydoesvideo" target="_blank" rel="noreferrer">
              <i className="socialicon-tiktok" />
            </a>
          </li>
          <li>
            <a href="https://vimeo.com/jaydoesvideo" target="_blank" rel="noreferrer">
              <i className="socialicon-vimeo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSlider;
