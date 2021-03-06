import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Section from '../components/Section';
import VideoGrid from '../components/VideoGrid';
import IconBlockSet from '../components/IconBlockSet';

const WeddingVideos = () => (
  <>
    <Navbar />
    <PageBanner
      pageTitle="Wedding Videos"
      homePageUrl="/"
      homePageText="Home"
      activePageText="Wedding Videos"
      imgClass="bg-8"
      imgPath="/img/page-banner/weddings.jpg"
    />
    <Section
      title="Wedding Videos"
      body="Capture your big day and cherish it for years to come with an amazing wedding video. Custom tailored video for weddings large and small with flexable destinations."
      imagePath="/img/weddings/collage.jpg"
    />
    <section className="pt-100 pb-70">
      <div className="container">
        <div className="row align-items-center">
          <img src={'/img/weddings/WeddingWIreAd2.jpg'} />
        </div>
        <div className="row align-items-center mt-30 mt-30">
          <h2 className="mt-30 mb-30" style={{textAlign: 'center'}}>Check us out on The Knot and Wedding Wire</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <a target="_blank" href="https://www.theknot.com/marketplace/redirect-2059739?utm_source=vendor_website&utm_medium=banner&utm_term=30fbf9ed-6a17-4340-888b-4ecc7fb4a94c&utm_campaign=vendor_badge_assets"><img style={{ width: '190px', height: '190px' }} alt="As Seen on The Knot" border="0" src="https://www.xoedge.com/myaccount/2019/website-share/VendorBadge_AsSeenOnWeb.png" /></a>
          <a rel='nofollow' target='_blank' href='https://www.weddingwire.com/biz/jaydoesvideo/92e1ad4b0ca83111.html' title='weddingwire.com'><img style={{ paddingLeft: '20px', height: '190px' }} alt='weddingwire.com' src='/img/weddings/weddingwire.jpg' /></a>
        </div>
      </div>
    </section>
    <VideoGrid
      columns={3}
      videos={[
        {
          name: 'Dana & Craig',
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
          name: 'Margarita & Timothy',
          photoUrl: '/img/weddings/margarita.jpg',
          href: '#',
          videoId: '367436881',
          videoHref: 'https://vimeo.com/367436881',
        },
      ]}
    />
    <IconBlockSet
      superTitle="Modern approach to weddings"
      title="A More Social Wedding"
      subTitle="Your wedding videos delivered faster for instagram, facebook, and tiktok"
      blocks={[
        {
          icon: 'socialicon-instagram',
          title: 'Instagram',
          body: 'Videos formatted specifically for Instagram feed and stories',
        },
        {
          icon: 'socialicon-tiktok',
          title: 'TikTok',
          body: 'Additional camera footage formatted for vertical tiktok videos',
        },
        {
          icon: 'socialicon-facebook',
          title: 'Facebook',
          body: 'Wedding highlights delivered in smaller increments for social media',
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

export default WeddingVideos;
