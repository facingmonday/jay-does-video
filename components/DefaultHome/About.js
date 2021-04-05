import React from 'react';
import Link from 'next/link';

const About = () => (
  <div className="about-area ptb-100">
    <div className="container">
      <div className="about-content-wrap">
        <div className="row">
          <div className="col-lg-8">
            <div className="about-content">
              <span>Who Am I?</span>
              <h2>Videographer, film maker, and cinephile.</h2>
              <p>Every frame is a portrait. Usually framed at twenty-four frames per second, that's a lot of portraits. Capturing this masterpieces takes diligence and a passion for the final product.</p>
              <Link href="/about">
                <a className="default-btn">Learn More</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-img">
              <img src="/img/about-img1.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
