import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PortfolioDetailsContent from '../components/PortfolioDetails/PortfolioDetailsContent';
import Footer from '../components/_App/Footer';
import Section from '../components/Section';
import SectionFullWidthBackground from '../components/SectionFullWidthBackground';

import VideoGrid from '../components/VideoGrid';
import IconBlockSet from '../components/IconBlockSet';

const MusicVideos = () => (
  <>
    <Navbar />
    <PageBanner
      pageTitle="Music Videos"
      homePageUrl="/"
      homePageText="Home"
      activePageText="Portfolio Details"
      imgClass="bg-8"
      imgPath="/img/page-banner/musicvideos.jpg"
    />
    <Section
      title="Music Video Creator"
      body="Jay is a Music Video, Commercial, &amp; Content Creator working nationwide for artists, brands, and organizations."
      imagePath="/img/musicvideos/information-blues.jpg"
    />
    <SectionFullWidthBackground imagePath="/img/musicvideos/information-blues-still.jpg" opacity="0.8" />
    <IconBlockSet
      superTitle="Modern approach to weddings"
      title="A More Social Wedding"
      subTitle="Your wedding videos delivered faster for instagram, facebook, and tiktok"
      blocks={[
        {
          icon: 'flaticon-script',
          title: 'Concept Videos',
          body: 'Music videos that tell a story or look more like a movie short.',
        },
        {
          icon: 'flaticon-talk-show',
          title: 'One Take "Live" Shots',
          body: 'Make them feel like they are right there listening to you with a live one take',
        },
        {
          icon: 'flaticon-edit-tools',
          title: 'Quick Edits',
          body: 'One location with multiple shots filmed in a couple hours for a quick visual for your single',
        },
      ]}
    />
    <SectionFullWidthBackground imagePath="/img/musicvideos/king-locust-million-billion.jpg" opacity="0.8" />
    <section className="pb-50">
      <div className="container">
        <div className="row">
          <VideoGrid
            columns={3}
            videos={[
              {
                name: 'King Locust - Necklace',
                photoUrl: '/img/musicvideos/king-locust-necklace.jpg',
                href: '#',
                videoId: '285405674',
                videoHref: 'https://vimeo.com/285405674',
              },
              {
                name: 'Adam Lengyel - Takes Talent',
                photoUrl: '/img/musicvideos/adam-lengyel-takes-talent.jpg',
                href: '#',
                videoId: '251947317',
                videoHref: 'https://vimeo.com/251947317',
              },
              {
                name: 'Lokii - My Birthday',
                photoUrl: '/img/musicvideos/lokii-my-birthday.jpg',
                href: '#',
                videoId: '234771855',
                videoHref: 'https://vimeo.com/234771855',
              },
              {
                name: 'King Locust - Trained To Go',
                photoUrl: '/img/musicvideos/king-locust-trained-to-go.jpg',
                href: '#',
                videoId: '285405674',
                videoHref: 'https://vimeo.com/285405674',
              },
              {
                name: 'WsOTF - Affiliated',
                photoUrl: '/img/musicvideos/wsotf-affiliated.jpg',
                href: '#',
                videoId: '229343973',
                videoHref: 'https://vimeo.com/229343973',
              },
              {
                name: 'Adam Lengyel - Crazy Street Life',
                photoUrl: '/img/musicvideos/adam-lengyel-crazy-street-life.jpg',
                href: '#',
                videoId: '209684427',
                videoHref: 'https://vimeo.com/209684427',
              },
              {
                name: 'Teddy And Keith - Ends Like This',
                photoUrl: '/img/musicvideos/teddy-keith-ends-like-this.jpg',
                href: '#',
                videoId: '209684427',
                videoHref: 'https://vimeo.com/209684427',
              },
              {
                name: 'Josh Ferro - Wishful',
                photoUrl: '/img/musicvideos/josh-ferro-wishful.jpg',
                href: '#',
                videoId: '231197660',
                videoHref: 'https://vimeo.com/231197660',
              },
              {
                name: 'King Locust - Million to a Billion',
                photoUrl: '/img/musicvideos/king-locust-million-billion.jpg',
                href: '#',
                videoId: '209684427',
                videoHref: 'https://vimeo.com/209684427',
              },
            ]}
          />
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default MusicVideos;
