import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeThree/MainBanner';
import About from '../components/HomeThree/About';
import Testimonials from '../components/HomeThree/Testimonials';
import UpcomingMovies from '../components/HomeThree/UpcomingMovies';
import WhatWeDo from '../components/HomeThree/WhatWeDo';
import TeamMember from '../components/HomeThree/TeamMember';
import ProductionProcess from '../components/HomeThree/ProductionProcess';
import LatestNews from '../components/HomeThree/LatestNews';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';

const Index3 = () => (
  <>
    <Navbar />
    <MainBanner />
    <About />
    <Testimonials />
    <UpcomingMovies />
    <WhatWeDo />
    <TeamMember />
    <ProductionProcess />
    <LatestNews />
    <Partners />
    <Footer />
  </>
);

export default Index3;
