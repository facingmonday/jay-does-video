import React from 'react';
import Link from 'next/link';

const Section = ({
  superTitle, title, body, href, imagePath,
}) => (
  <div className="about-area-two bg-color ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-content">
            { superTitle && <span>{superTitle}</span> }
            <h2>{title}</h2>
            <p>{body}</p>
            {href && (
              <Link href={href}>
                <a className="default-btn">Learn More</a>
              </Link>
            )}
          </div>
        </div>

        <div className="col-lg-6">
          <div className="about-img">
            <img src={imagePath} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Section;
