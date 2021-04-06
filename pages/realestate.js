import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Section from '../components/Section';
import VideoCreated from '../components/VideoCreated';
import VideoGrid from '../components/VideoGrid';

const PromotionalVideos = () => (
  <>
    <Navbar />
    <PageBanner
      pageTitle="Real Estate Videos"
      homePageUrl="/"
      homePageText="Home"
      activePageText="Real Estate Videos"
      imgClass="bg-8"
      imgPath="/img/page-banner/realestate.jpg"
    />
    <Section
      title="Real Estate Video"
      body="Make your property stand out with a personalized Real Estate video. Increase your marketing to attract more buyers."
      imagePath="/img/realestate/collage.jpg"
    />
    <VideoCreated videoId={275444995} channel="vimeo" />
    <VideoGrid
      columns={3}
      videos={[
        {
          name: 'Baity Wedding',
          photoUrl: '/img/weddings/baity.jpg',
          href: '#',
          videoId: '366383639',
          videoHref: 'https://vimeo.com/366383639',
        },
        {
          name: 'Bobbi & Bradley',
          photoUrl: '/img/weddings/bobbibradley.jpg',
          href: '#',
          videoId: '390368720',
          videoHref: 'https://vimeo.com/390368720',
        },
        {
          name: 'Bobbi & Bradley',
          photoUrl: '/img/weddings/margarita.jpg',
          href: '#',
          videoId: '367436881',
          videoHref: 'https://vimeo.com/367436881',
        },
      ]}
    />
    <Footer />
  </>
);

export default PromotionalVideos;
