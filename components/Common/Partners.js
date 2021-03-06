import React from 'react';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 30,
  nav: false,
  mouseDrag: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 3,
    },
    576: {
      items: 4,
    },
    768: {
      items: 4,
    },
    992: {
      items: 6,
    },
    1200: {
      items: 6,
    },
  },
};

const Partners = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="partner-area ptb-100">
      <div className="container">
        {display ? (
          <OwlCarousel
            className="partner-wrap owl-carousel owl-theme"
            {...options}
          >
            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/img/brand/white-brand1.png" alt="Image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/img/brand/white-brand2.png" alt="Image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/img/brand/white-brand3.png" alt="Image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/img/brand/white-brand4.png" alt="Image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/img/brand/white-brand5.png" alt="Image" />
              </a>
            </div>

            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/img/brand/white-brand6.png" alt="Image" />
              </a>
            </div>
          </OwlCarousel>
        ) : ''}
      </div>
    </div>
  );
};

export default Partners;
