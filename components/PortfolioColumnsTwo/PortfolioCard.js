import React from 'react';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const PortfolioCard = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [videoId, setVideoId] = React.useState('bk7McNUjWgw');
  const handleClick = (id) => (evt) => {
    evt.preventDefault();
    setVideoId(id);
    setIsOpen(!isOpen);
  };
  return (
    <section className="portfolio-area ptb-100">
      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="vimeo"
        isOpen={!isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(!isOpen)}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-portfolio">
              <div className="portfolio-image bg-1">
                <div className="price-wrap">
                  <Link href="#play-video">
                    <a
                      onClick={handleClick('351969090')}
                      className="popup-youtube"
                    >
                      <i className="flaticon-play" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="portfolio-content">
                <span>Music Video</span>
                <h3>
                  <Link href="/portfolio-details">
                    <a>Information Blues</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-portfolio">
              <div className="portfolio-image bg-2">
                <div className="price-wrap">
                  <Link href="#play-video">
                    <a
                      onClick={(e) => { e.preventDefault(); openModal(); }}
                      className="popup-youtube"
                    >
                      <i className="flaticon-play" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="portfolio-content">
                <span>Shooting</span>
                <h3>
                  <Link href="/portfolio-details">
                    <a>In the time of shooting</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-portfolio">
              <div className="portfolio-image bg-3">
                <div className="price-wrap">
                  <Link href="#play-video">
                    <a
                      onClick={(e) => { e.preventDefault(); openModal(); }}
                      className="popup-youtube"
                    >
                      <i className="flaticon-play" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="portfolio-content">
                <span>Technology</span>
                <h3>
                  <Link href="/portfolio-details">
                    <a>Deep Sea</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-portfolio">
              <div className="portfolio-image bg-4">
                <div className="price-wrap">
                  <Link href="#play-video">
                    <a
                      onClick={(e) => { e.preventDefault(); openModal(); }}
                      className="popup-youtube"
                    >
                      <i className="flaticon-play" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="portfolio-content">
                <span>Horror</span>
                <h3>
                  <Link href="/portfolio-details">
                    <a>Horror Night</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-portfolio">
              <div className="portfolio-image bg-5">
                <div className="price-wrap">
                  <Link href="#play-video">
                    <a
                      onClick={(e) => { e.preventDefault(); openModal(); }}
                      className="popup-youtube"
                    >
                      <i className="flaticon-play" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="portfolio-content">
                <span>Musical</span>
                <h3>
                  <Link href="/portfolio-details">
                    <a>Music Video</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-portfolio">
              <div className="portfolio-image bg-6">
                <div className="price-wrap">
                  <Link href="#play-video">
                    <a
                      onClick={(e) => { e.preventDefault(); openModal(); }}
                      className="popup-youtube"
                    >
                      <i className="flaticon-play" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="portfolio-content">
                <span>Art</span>
                <h3>
                  <Link href="/portfolio-details">
                    <a>Travelling World</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-portfolio">
              <div className="portfolio-image bg-7">
                <div className="price-wrap">
                  <Link href="#play-video">
                    <a
                      onClick={(e) => { e.preventDefault(); openModal(); }}
                      className="popup-youtube"
                    >
                      <i className="flaticon-play" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="portfolio-content">
                <span>Studio</span>
                <h3>
                  <Link href="/portfolio-details">
                    <a>Shooting Spot</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-portfolio">
              <div className="portfolio-image bg-8">
                <div className="price-wrap">
                  <Link href="#play-video">
                    <a
                      onClick={(e) => { e.preventDefault(); openModal(); }}
                      className="popup-youtube"
                    >
                      <i className="flaticon-play" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="portfolio-content">
                <span>Documentary</span>
                <h3>
                  <Link href="/portfolio-details">
                    <a>Journey By Train</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div className="col-12 text-center">
            <Link href="#">
              <a className="default-btn">
                View More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCard;
