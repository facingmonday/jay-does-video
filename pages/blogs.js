import React from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const blogs = [
  {
    userName: 'Jay',
    imagePath: '/img/blog/blog1.jpg',
    date: '11/29/2021',
    title: 'Information Blues',
    description: 'Activist group known as The Woovs risk everything to overthrow a tyrannical social media empire and save society from the Information Blues.',
    href: '#',
  },
];
const BlogGrid = () => (
  <>
    <Navbar />
    <PageBanner
      pageTitle="Blog"
      homePageUrl="/"
      homePageText="Home"
      activePageText="Blog"
      imgClass="bg-6"
    />

    <div className="blog-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="top-title">News Feeds</span>
          <h2>Get The Latest News</h2>
        </div>

        <div className="row">
          {
            blogs.map(({
              userName, imagePath, date, title, description, href,
            }) => (
              <div className="col-lg-4 col-md-6">
                <div className="single-blog">
                  <Link href="/blog-details">
                    <a>
                      <img src={imagePath} alt="Image" />
                    </a>
                  </Link>

                  <div className="blog-content">
                    <ul>
                      <li>
                        <i className="flaticon-user" />
                        <Link href="#"><a>{userName}</a></Link>
                      </li>

                      <li>
                        <i className="flaticon-calendar" />
                        {date}
                      </li>
                    </ul>

                    <Link href={href}>
                      <a>
                        <h3>{title}</h3>
                      </a>
                    </Link>

                    <p>{description}</p>

                    <Link href={href}>
                      <a className="read-more">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }

          <div className="col-lg-12 col-md-12">
            <div className="pagination-area text-center">
              <Link href="/blog-details">
                <a className="prev page-numbers">
                  <i className="bx bx-chevron-left" />
                </a>
              </Link>

              <span className="page-numbers current">1</span>

              <Link href="/blog-details">
                <a className="page-numbers">2</a>
              </Link>

              <Link href="/blog-details">
                <a className="page-numbers">3</a>
              </Link>

              <Link href="/blog-details">
                <a className="page-numbers">4</a>
              </Link>

              <Link href="/blog-details">
                <a className="next page-numbers">
                  <i className="bx bx-chevron-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default BlogGrid;
