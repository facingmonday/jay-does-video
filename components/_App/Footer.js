import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <div className="logo">
                  <Link href="/">
                    <a><img src="/img/white-logo.png" alt="Image" /></a>
                  </Link>
                </div>

                <div className="newsletter-wrap">
                  <h3>Subscribe Newsletter</h3>
                  <form className="newsletter-form">
                    <input type="email" className="form-control" placeholder="Enter email address" name="email" required />

                    <button className="send-btn" type="submit">
                      <i className="bx bx-right-arrow-alt" />
                    </button>
                  </form>
                </div>

                <ul className="social-wrap">
                  <li>
                    <a href="https://vimeo.com/jaydoesvideo" target="_blank" rel="noreferrer">
                      <i className="bx bxl-vimeo" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/jaydoesvideo" target="_blank" rel="noreferrer">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCAqqLD6e_rX65CvlbY-hYSQ/videos" target="_blank" rel="noreferrer">
                      <i className="bx bxl-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Contact Us</h3>

                <ul className="address">
                  <li>
                    <i className="flaticon-pin" />
                    Highland Square, Akron, OH 44303, USA
                  </li>
                  <li>
                    <i className="flaticon-email-1" />
                    <a href="mailto:jaydoesvideo@pm.me">
                      jaydoesvideo@pm.me
                    </a>
                  </li>
                  <li>
                    <i className="socialicon-instagram" />
                    <a href="https://instagram.com/jaydoesvideo">
                      Instagram: @jaydoesvideo
                    </a>
                  </li>
                  <li>
                    <i className="socialicon-tiktok" />
                    <a href="https://tiktok.com/@jaydoesvideo">
                      TikTok: @jaydoesvideo
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Additional Links</h3>

                <ul className="additional-link">
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>Help (FAQ)</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Instagram</h3>

                <ul className="instagram">
                  <li>
                    <a href="https://instagram.com/jaydoesvideo">
                      <img src="/img/instagram/instagram1.png" alt="Image" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/jaydoesvideo">
                      <img src="/img/instagram/instagram2.png" alt="Image" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/jaydoesvideo">
                      <img src="/img/instagram/instagram3.png" alt="Image" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/jaydoesvideo">
                      <img src="/img/instagram/instagram4.png" alt="Image" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/jaydoesvideo">
                      <img src="/img/instagram/instagram5.png" alt="Image" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/jaydoesvideo">
                      <img src="/img/instagram/instagram6.png" alt="Image" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-bottom-area">
        <div className="container">
          <div className="copyright-wrap">
            <p>
              Copyright @
              {currentYear}
              {' '}
              JayDoesVideo. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
