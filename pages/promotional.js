import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PortfolioDetailsContent from '../components/PortfolioDetails/PortfolioDetailsContent';
import Footer from '../components/_App/Footer';
import Section from '../components/Section';

import VideoCreated from '../components/VideoCreated';
import VideoGrid from '../components/VideoGrid';
import IconBlockSet from '../components/IconBlockSet';

const PromotionalVideos = () => (
  <>
    <Navbar />
    <PageBanner
      pageTitle="Promotional Videos"
      homePageUrl="/"
      homePageText="Home"
      activePageText="Promotional Videos"
      imgClass="bg-8"
      imgPath="/img/page-banner/promotional.jpg"
    />
    <Section
      title="Promotional Videos"
      body="Market your business with a video. Outline your services and connect with your customers. Share your story and build your brand."
      imagePath="/img/promotional/collage.jpg"
    />
    <VideoCreated videoId={275444995} channel="vimeo" />
    <IconBlockSet
      superTitle="elevate your messaging"
      title="Commercial Videography"
      subTitle="Creative commercial and video advertising campaigns"
      blocks={[
        {
          icon: 'flaticon-music',
          title: 'Interviews',
          body: 'Need a professional interview style video, you’ve come to the right place!',
        },
        {
          icon: 'flaticon-user',
          title: 'Conferences',
          body: 'Whether you need professional headshots or commercial photography for an event, we’ve got the pro for you. ',
        },
        {
          icon: 'flaticon-megaphone',
          title: 'Commercial Film',
          body: 'Contact our professional film team today to come up with a vision for your next commercial video. in',
        },
      ]}
    />
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
