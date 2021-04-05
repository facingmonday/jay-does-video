import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PortfolioColumnsTwo from '../components/PortfolioColumnsThree/PortfolioCard';
import Footer from '../components/_App/Footer';

const WorkIndex = () => (
  <>
    <Navbar />
    <PageBanner
      pageTitle="Portfolio"
      homePageUrl="/"
      homePageText="Home"
      activePageText="Portfolio"
      imgClass="bg-3"
    />
    <PortfolioColumnsTwo />
    <Footer />
  </>
);

export default WorkIndex;
