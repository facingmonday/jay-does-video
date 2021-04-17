import React, { useState } from 'react';

const ContactForm = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [response, setResponse] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.first_name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    console.log('body', {
      name, email, phone, message,
    });
    throw new Error('Abort');
    const url = 'https://your-cosmic-function-endpoint-here.lambda.aws.com'; // ADD YOUR ENDPOINT HERE
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name, email, phone, message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
      .then((response) => {
        console.log('response', response);
        setResponse(response);
      })
      .catch((error) => {
        setError(e);
      });
  };
  return (
    <div className="contact-area ptb-100">
      <div className="container">
        { !!error && !!error.message && <div className="jc-center"><span>{error.message}</span></div>}
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>Mon-Sat: 8:00am – 8:00pm</p>
              <ul>
                <li>
                  <i className="flaticon-email-1" />
                  Email:
                  <a href="mailto:jaydoesvideo@pm.me">jaydoesvideo@pm.me</a>
                </li>
                <li>
                  <i className="flaticon-instagram-logo-1" />
                  Insta:
                  <a href="tel:15877854578">@jaydoesvideo</a>
                </li>
                <li>
                  <i className="flaticon-pin" />
                  Address:
                  <span>Highland Square, Akron, OH 44303, USA</span>
                </li>
              </ul>

              <ul className="social-wrap">
                <li className="follow">
                  Follow Us
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="contact-wrap">
              <h3>Write Us</h3>

              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input type="text" name="name" id="name" className="form-control" required placeholder="Your Name" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input type="text" name="phone" id="phone" required className="form-control" placeholder="Your Phone" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input type="text" name="subject" id="subject" className="form-control" required placeholder="Your Subject" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Your Message" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn page-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
