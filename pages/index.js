import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/DefaultHome/HeroSlider';
import About from '../components/DefaultHome/About';
import VideoCreated from '../components/DefaultHome/VideoCreated';
import WhatWeDo from '../components/DefaultHome/WhatWeDo';
import Testimonials from '../components/Common/Testimonials';
import AwardWinningMovies from '../components/Common/AwardWinningMovies';
import GetInTouch from '../components/Common/GetInTouch';
import UpcomingMovies from '../components/DefaultHome/UpcomingMovies';
import ExclusiveShop from '../components/DefaultHome/ExclusiveShop';
import VideoGrid from '../components/VideoGrid';
import LatestNews from '../components/DefaultHome/LatestNews';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';

const Index = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
      <Navbar />
      <HeroSlider />
      <About />
      <VideoCreated />
      <WhatWeDo />
      {/* <Testimonials /> */}
      {/* <AwardWinningMovies /> */}
      <GetInTouch />
      {/* <UpcomingMovies /> */}
      <VideoGrid
        columns={3}
        videos={[
          {
            name: 'King Locust - Chapter 2',
            photoUrl: '/img/musicvideos/king-locust-chapter-2.jpg',
            href: '#',
            videoId: '256243041',
            videoHref: 'https://vimeo.com/256243041',
          },
          {
            name: 'The Woovs - Information Blues',
            photoUrl: '/img/portfolio/portfolio1.jpg',
            href: '#',
            videoId: '351969090',
            videoHref: 'https://vimeo.com/351969090',
          },
          {
            name: 'Baity Wedding',
            photoUrl: '/img/weddings/baity.jpg',
            href: '#',
            videoId: '366383639',
            videoHref: 'https://vimeo.com/366383639',
          },
        ]}
      />
      {/* <ExclusiveShop products={products.slice(0, 4)} /> */}
      {/* <TeamStyleOne /> */}
      <Partners />
      <LatestNews />
      <Footer />
    </>
  );
};

export default Index;
