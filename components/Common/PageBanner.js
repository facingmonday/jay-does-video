import React from 'react';
import Link from 'next/link';

const PageBanner = ({
  pageTitle, homePageUrl, homePageText, activePageText, imgClass, imgPath,
}) => (
  <div className={`page-title-area ${imgClass}`} {...(imgPath ? { style: { backgroundImage: `url(${imgPath})` } } : {})}>
    <div className="container">
      <div className="page-title-content">
        <h2>{pageTitle}</h2>
        <ul>
          <li>
            <Link href={homePageUrl}>
              <a>{homePageText}</a>
            </Link>
          </li>
          <li className="active">{activePageText}</li>
        </ul>
      </div>
    </div>
  </div>
);

export default PageBanner;
