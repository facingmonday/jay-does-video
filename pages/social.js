import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Section from '../components/Section';
import VideoGrid from '../components/VideoGrid';
import VimeoVideo from '../components/VimeoVideo';

const PromotionalVideos = () => (
  <>
    <Navbar />
    <PageBanner
      pageTitle="Content Creation"
      homePageUrl="/"
      homePageText="Home"
      activePageText="Content Creation"
      imgClass="bg-8"
      imgPath="/img/page-banner/social.jpg"
    />
    <Section
      title="Content Creation"
      body="Capture your big day and cherish it for years to come with an amazing wedding video. Custom tailored video for weddings large and small with flexable destinations."
      imagePath="/img/social/contentcreation.jpg"
    />
    <section className="pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <span>The new social video app</span>
            <h2>TikTok Videos</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@jaydoesvideo/video/6946572367544061189" data-video-id="6946572367544061189" style={{ maxWidth: '605px', minWidth: '325px' }}>
              {' '}
              <section>
                {' '}
                <a target="_blank" title="@jaydoesvideo" href="https://www.tiktok.com/@jaydoesvideo" rel="noreferrer">@jaydoesvideo</a>
                {' '}
                <p>Mac and cheese at the square scullery.</p>
                {' '}
                <a target="_blank" title="♬ original sound - jaydoesvideo" href="https://www.tiktok.com/music/original-sound-6946572220814740229" rel="noreferrer">♬ original sound - jaydoesvideo</a>
                {' '}
              </section>
              {' '}
            </blockquote>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@jaydoesvideo/video/6946571918740884742" data-video-id="6946571918740884742" style={{ maxWidth: '605px', minWidth: '325px' }}>
              {' '}
              <section>
                {' '}
                <a target="_blank" title="@jaydoesvideo" href="https://www.tiktok.com/@jaydoesvideo" rel="noreferrer">@jaydoesvideo</a>
                {' '}
                <p>Eat. Square. Scullery.</p>
                {' '}
                <a target="_blank" title="♬ original sound - jaydoesvideo" href="https://www.tiktok.com/music/original-sound-6946571807692573445" rel="noreferrer">♬ original sound - jaydoesvideo</a>
                {' '}
              </section>
              {' '}
            </blockquote>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@jaydoesvideo/video/6939269833317993733" data-video-id="6939269833317993733" style={{ maxWidth: '605px', minWidth: '325px' }}>
              {' '}
              <section>
                {' '}
                <a target="_blank" title="@jaydoesvideo" href="https://www.tiktok.com/@jaydoesvideo" rel="noreferrer">@jaydoesvideo</a>
                {' '}
                <p>
                  Convert. Cut. Weed. Press.
                  <a title="shirtbusiness" target="_blank" href="https://www.tiktok.com/tag/shirtbusiness" rel="noreferrer">##shirtbusiness</a>
                  {' '}
                  <a title="printingbusiness" target="_blank" href="https://www.tiktok.com/tag/printingbusiness" rel="noreferrer">##printingbusiness</a>
                  {' '}
                  <a title="heatpressnation" target="_blank" href="https://www.tiktok.com/tag/heatpressnation" rel="noreferrer">##heatpressnation</a>
                  {' '}
                  <a title="heatpressvinyl" target="_blank" href="https://www.tiktok.com/tag/heatpressvinyl" rel="noreferrer">##heatpressvinyl</a>
                </p>
                {' '}
                <a target="_blank" title="♬ Woah (feat. D3Mstreet) - KRYPTO9095" href="https://www.tiktok.com/music/Woah-feat-D3Mstreet-6691366574592396038" rel="noreferrer">♬ Woah (feat. D3Mstreet) - KRYPTO9095</a>
                {' '}
              </section>
              {' '}
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <span>Tell your story</span>
            <h2>Instagram Stories</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 jc-center">
            <iframe src="https://player.vimeo.com/video/533666139" width="270" height="480" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen />
          </div>
          <div className="col-sm-4 jc-center">
            <iframe src="https://player.vimeo.com/video/533666139" width="270" height="480" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen />
          </div>
          <div className="col-sm-4 jc-center">
            <iframe src="https://player.vimeo.com/video/533666139" width="270" height="480" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default PromotionalVideos;
