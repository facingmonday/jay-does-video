import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Section from '../components/Section';
import VideoCreated from '../components/VideoCreated';
import VimeoVideo from '../components/VimeoVideo';

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
    <VideoCreated
      videoId={275444995}
      channel="vimeo"
      images={[
        {
          path: '/img/realestate/portfolio1.jpg',
        },
        {
          path: '/img/realestate/portfolio2.jpg',
        },
        {
          path: '/img/realestate/portfolio3.jpg',
        },
      ]}
    />
    <section className="ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <VimeoVideo id="532730044" />
          </div>
          <div className="col-sm-6">
            <VimeoVideo id="533795012" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default PromotionalVideos;
