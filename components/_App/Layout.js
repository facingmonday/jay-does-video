import React from 'react';
import Head from 'next/head';
import { ToastContainer, Slide } from 'react-toastify';
import GoTop from './GoTop';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>JayDoesVideo -  - Videographer, film maker, and cinephile</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="JayDoesVideo -  - Videographer, film maker, and cinephile" />
      <meta name="og:title" property="og:title" content="JayDoesVideo -  - Videographer, film maker, and cinephile" />
      <meta name="twitter:card" content="JayDoesVideo -  - Videographer, film maker, and cinephile" />
      <link rel="canonical" href="https://jaydoesvideo.com/" />
      <meta property="og:image" content="https://jaydoesvideo.com/img/logo.png" />
      <script async src="https://www.tiktok.com/embed.js" />
    </Head>

    {children}

    <GoTop scrollStepInPx="100" delayInMs="10.50" />

    <ToastContainer transition={Slide} />
  </>
);

export default Layout;
