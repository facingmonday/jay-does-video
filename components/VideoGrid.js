import React from 'react';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const VideoGrid = ({ videos }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [videoId, setVideoId] = React.useState();
  const handleClick = (id) => (evt) => {
    evt.preventDefault();
    setVideoId(id);
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    setVideoId(null);
  };
  return (
    <section className="portfolio-area ptb-50">
      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="vimeo"
        isOpen={isOpen && videoId}
        videoId={videoId}
        onClose={handleClose}
      />

      <div className="container">
        <div className="row">
          {
            videos.map(({
              photoUrl, type, name, href, videoId, videoHref,
            }) => (
              <div className="col-lg-4 col-md-6">
                <div className="single-portfolio">
                  <div className="portfolio-image" style={{ backgroundImage: `url(${photoUrl})` }}>
                    <div className="price-wrap">
                      <Link href="#play-video">
                        <a
                          onClick={handleClick(videoId)}
                          className="popup-youtube"
                        >
                          <i className="flaticon-play" />
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="portfolio-content">
                    <span>{type}</span>
                    <h3>
                      <Link href={href}>
                        <a>{name}</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))
          }

          <div className="col-12 text-center">
            <Link href="/portfolio">
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

export default VideoGrid;
