import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import FunFacts from '../components/About/FunFacts';
import WeProvideServices from '../components/About/WeProvideServices';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import AwardWinningMovies from '../components/Common/AwardWinningMovies';
import ContactWithUs from '../components/Common/ContactWithUs';
import Partners from '../components/Common/Partners';
import Footer from '../components/_App/Footer';
import Section from '../components/Section';

const About = () => (
  <>
    <Navbar />
    <PageBanner
      pageTitle="About"
      homePageUrl="/"
      homePageText="Home"
      activePageText="About"
      imgClass="bg-about"
    />
    <AboutContent />
    <FunFacts />
    <WeProvideServices />
    {/* <TeamStyleTwo />
            <div className="bg-color">
                <AwardWinningMovies />
            </div> */}
    <ContactWithUs />
    <Partners />
    <Section
      superTitle="All the best gear"
      title="Use the right camera for the shoot"
      imagePath="/img/about/fx3-setup.jpg"
    />
    <Footer />
  </>
);

export default About;
