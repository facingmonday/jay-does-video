import React from 'react';
import Link from 'next/link';

const WhatWeDo = () => (
  <div className="what-we-do-area pt-100 pb-70">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="what-we-do-content">
            <span>What I Do</span>
            <h2>Plan the work. Work the plan.</h2>
            <p>I like to have a plan when going to a shoot. I usually include a shot list, pre-approved story board, and a clipboard.</p>

            <div className="brand-wrap">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-md-4">
                  <div className="brand">
                    <Link href="#">
                      <a>
                        <img src="/img/brand/brand1.png" alt="Image" />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 col-md-4">
                  <div className="brand">
                    <Link href="#">
                      <a>
                        <img src="/img/brand/brand2.png" alt="Image" />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 col-md-4 offset-sm-3 offset-md-0">
                  <div className="brand">
                    <Link href="#">
                      <a>
                        <img src="/img/brand/brand3.png" alt="Image" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contact">
              <a className="default-btn">
                Contact Us
              </a>
            </Link>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="what-we-do-item mt-30">
                <i className="flaticon-film-editing-1" />
                <h3>Pre-Production</h3>
                <p>Meet up to hash out some ideas. Go over the concept, locations, colors, props, costumes, etc..</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="what-we-do-item">
                <i className="flaticon-film-editing" />
                <h3>Production</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="what-we-do-item">
                <i className="flaticon-advertising" />
                <h3>Post-Production</h3>
                <p>Editing video is an artform. It takes many hours alone in a dark room cutting footage into the final product.</p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="what-we-do-item mt-mince-30">
                <i className="flaticon-movie" />
                <h3>Delivery</h3>
                <p>The final product(s) are delivered via dropbox to allow it to be downloaded to your iOS or Android device as well as Laptops and Desktops for sharing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhatWeDo;
