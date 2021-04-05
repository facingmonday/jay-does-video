import React from 'react';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 30,
  nav: false,
  mouseDrag: true,
  items: 1,
  dots: true,
  autoplay: true,
  smartSpeed: 1500,
  autoplayHoverPause: true,
};

const Testimonials = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="testimonial-area ptb-100">
      <div className="container">
        {display ? (
          <OwlCarousel
            className="testimonial-wrap owl-carousel owl-theme"
            {...options}
          >
            <div className="testimonial-content">
              <i className="flaticon-quotation" />
              <p>“True pro. ”</p>

              <h3>Adam Lengyel</h3>
              <span>The Woovs</span>
            </div>

            <div className="testimonial-content">
              <i className="flaticon-quotation" />
              <p>“Full of ideas and the only one around here putting out creative work.”</p>

              <h3>Lokii</h3>
              <span>Sound Engineer</span>
            </div>

            <div className="testimonial-content">
              <i className="flaticon-quotation" />
              <p>“Jay is a pleasure to work with. Always on time and professional for both the shooting and the delivery”</p>

              <h3>Stephanie</h3>
              <span>Clay's Park Resort</span>
            </div>
          </OwlCarousel>
        ) : ''}
      </div>
    </div>
  );
};

export default Testimonials;
