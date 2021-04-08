import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const VideoCreated = ({ videoId, channel, images = [] }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="video-created-area-three bg-color-two pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 p-0">
              <div className="video-img">
                <img src={images && images.length ? images[0].path : '/img/liveevents/video-created1.jpg'} alt="Image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 p-0">
              <div className="video-wrap">
                <img src={images && images.length ? images[1].path : '/img/liveevents/video-created2.jpg'} alt="Image" />
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

            <div className="col-lg-3 col-md-3 p-0">
              <div className="video-img">
                <img src={images && images.length ? images[2].path : '/img/liveevents/video-created3.jpg'} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel={channel || 'youtube'}
        isOpen={!isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(!isOpen)}
      />
    </>

  );
};

export default VideoCreated;
