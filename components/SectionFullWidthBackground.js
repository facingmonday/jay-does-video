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

const SectionFullWidthBackground = ({
  title, subTitle, imagePath, opacity,
}) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div
      className="section-full-width-background ptb-100"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className="container">
        <div className="section-full-width-background-content">
          <h3>{title}</h3>
          <span>{subTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default SectionFullWidthBackground;
