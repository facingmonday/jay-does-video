import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Section from '../components/Section';
import VideoCreated from '../components/VideoCreated';
import VideoGrid from '../components/VideoGrid';
import IconBlockSet from '../components/IconBlockSet';

const PromotionalVideos = () => (
  <>
    <Navbar />
    <PageBanner
      pageTitle="Live Events"
      homePageUrl="/"
      homePageText="Home"
      activePageText="Live Events"
      imgClass="bg-8"
      imgPath="/img/page-banner/liveevents.jpg"
    />
    <Section
      title="Live Events"
      body="Capture your big day and cherish it for years to come with an amazing wedding video. Custom tailored video for weddings large and small with flexable destinations."
      imagePath="/img/liveevents/asburyallstars.jpg"
    />
    <VideoCreated videoId={275444995} channel="vimeo" />
    <IconBlockSet
      superTitle="elevate your messaging"
      title="Live Events"
      subTitle="Capture your brand and enhance your message through video."
      blocks={[
        {
          icon: 'flaticon-music',
          title: 'Concerts',
          body: 'A hype video of your concert could help spread your music, get you gigs, and promote your band',
        },
        {
          icon: 'flaticon-user',
          title: 'Festivals',
          body: 'Promote your festival with a montage video',
        },
        {
          icon: 'flaticon-megaphone',
          title: 'Sports',
          body: 'If you are interested in capturing your event on video or looking to create a video to market your business, contact us and we\'ll help make your vision a reality.',
        },
      ]}
    />
    <VideoGrid
      columns={3}
      videos={[
        {
          name: 'Brittany & Matt',
          photoUrl: '/img/weddings/brittany-social.jpg',
          href: '#',
          videoId: '349903241',
          videoHref: 'https://vimeo.com/349903241',
        },
        {
          name: 'Bobbi & Bradley',
          photoUrl: '/img/weddings/bobbibradley-social.jpg',
          href: '#',
          videoId: '533330759',
          videoHref: 'https://vimeo.com/533330759',
        },
        {
          name: 'James & Regina',
          photoUrl: '/img/weddings/jamesregina-social.jpg',
          href: '#',
          videoId: '533332392',
          videoHref: 'https://vimeo.com/533332392',
        },
      ]}
    />
    <Footer />
  </>
);

export default PromotionalVideos;
