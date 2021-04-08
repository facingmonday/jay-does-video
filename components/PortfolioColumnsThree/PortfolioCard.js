import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const portfolioData = [
  {
    type: 'Music Video',
    name: 'Information Blues',
    photoUrl: '/img/portfolio/portfolio1.jpg',
    href: '/work/information-blues',
    videoId: '351969090',
    videoHref: 'https://vimeo.com/manage/videos/351969090',
  },
  {
    type: 'Wedding',
    name: 'Baity Weding',
    photoUrl: '/img/portfolio/portfolio2.jpg',
    href: '/work/baity-wedding',
    videoId: '366383639',
    videoHref: 'https://vimeo.com/366383639',
  },
  {
    type: 'Promotional',
    name: 'Clays Park Volleyball',
    photoUrl: '/img/portfolio/portfolio3.jpg',
    href: '/work/baity-wedding',
    videoId: '351035091',
    videoHref: 'https://vimeo.com/351035091',
  },
  {
    type: 'Live Event',
    name: 'Mark Leach',
    photoUrl: '/img/portfolio/portfolio4.jpg',
    href: '/work/baity-wedding',
    videoId: '294892756',
    videoHref: 'https://vimeo.com/294892756',
  },
  {
    type: 'Live Event',
    name: 'Raw Artists',
    photoUrl: '/img/portfolio/portfolio5.jpg',
    href: '/work/baity-wedding',
    videoId: '290144468',
    videoHref: 'https://vimeo.com/290144468',
  },
  {
    type: 'Promotional',
    name: 'Alexander Autobody',
    photoUrl: '/img/portfolio/portfolio6.jpg',
    href: '/work/baity-wedding',
    videoId: '282242339',
    videoHref: 'https://vimeo.com/282242339',
  },
  {
    type: 'Promotional',
    name: 'Crystal Tiger Dice',
    photoUrl: '/img/portfolio/portfolio7.jpg',
    href: '/work/crystal-tiger-dice',
    videoId: '278369245',
    videoHref: 'https://vimeo.com/278369245',
  },
  {
    type: 'Wedding',
    name: 'Margarita Wedding',
    photoUrl: '/img/portfolio/portfolio8.jpg',
    href: '/work/margarita-wedding',
    videoId: '367436881',
    videoHref: 'https://vimeo.com/367436881',
  },
  {
    type: 'Live Event',
    name: 'Country Fest',
    photoUrl: '/img/portfolio/portfolio9.jpg',
    href: '/work/country-fest-2018',
    videoId: '275444995',
    videoHref: 'https://vimeo.com/275444995',
  },
  {
    type: 'Music Video',
    name: 'King Locust - My Faith',
    photoUrl: '/img/portfolio/portfolio10.jpg',
    href: '/work/king-locust-my-faith',
    videoId: '259787181',
    videoHref: 'https://vimeo.com/259787181',
  },
  {
    type: 'Live Event',
    name: 'BCM Fight Night',
    photoUrl: '/img/portfolio/portfolio11.jpg',
    href: '/work/bcm-fight-night',
    videoId: '400112514',
    videoHref: 'https://vimeo.com/400112514',
  },
  {
    type: 'Corporate',
    name: 'Squirrels Retreat 2018',
    photoUrl: '/img/portfolio/portfolio12.jpg',
    href: '/work/baity-wedding',
    videoId: '282207781',
    videoHref: 'https://vimeo.com/282207781',
  },
];
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
          {
            portfolioData.map(({
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

export default PortfolioCard;
