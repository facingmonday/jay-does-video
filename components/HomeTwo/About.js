import React from 'react';
import Link from 'next/link';

const About = () => (
  <div className="about-area-two bg-color ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-content">
            <span>Who Am I?</span>
            <h2>Videographer, film maker, and cinephile.</h2>
            <p>I'm a US based film-maker specializing in a more cinematic approach to videos for your music, wedding, promotional, or corporate video. the images are digitally recorded instead of film stock producing</p>

            <Link href="/about">
              <a className="default-btn">Learn More</a>
            </Link>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="about-img">
            <img src="/img/about-img-two.jpg" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
