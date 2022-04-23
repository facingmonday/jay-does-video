import React from 'react';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const VideoCreated = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='vimeo' 
                isOpen={!isOpen} 
                videoId='351969090' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        
            <div className="video-created-area ptb-100">
                <div className="container">
                    <div className="video-created-wrap">
                        <img src="/img/video-created-img.jpg" alt="Image" />

                        <div className="video-wrap">
                            <Link href="#play-video">
                                <a
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="popup-youtube"
                                > 
                                    <i className="flaticon-play"></i>
                                </a>
                            </Link>
                        </div>

                        <h2>Video Created By JayDoesVideo</h2>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default VideoCreated;