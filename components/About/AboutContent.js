import React from 'react';

const AboutContent = () => (
  <div className="about-area-two bio-data ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="about-content">
            <span>JayDoesVideo</span>
            <h2>Videographer, film maker, and cinephile.</h2>
            <h3>Who I Am</h3>
            <p>I'm a US based film-maker specializing in a more cinematic approach to videos for your music, wedding, promotional, or corporate video.</p>

            <h3 className="mt-30">Who I Work With</h3>
            <p>I work with musicians, artists, marketing teams and business owners to come up with the best approach to filming your video. Plan the work. Work the plan.</p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-sm-6 p-0">
              <div className="about-grid-img">
                <img src="/img/about-grid/about-grid1.jpg" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 p-0">
              <div className="about-grid-img">
                <img src="/img/about-grid/about-grid2.jpg" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 p-0">
              <div className="about-grid-img r-sm mb-0">
                <img src="/img/about-grid/about-grid3.jpg" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 p-0">
              <div className="about-grid-img mb-0">
                <img src="/img/about-grid/about-grid4.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutContent;
