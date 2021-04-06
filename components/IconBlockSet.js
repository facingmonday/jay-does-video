import React from 'react';

const IconBlockSet = ({
  superTitle, title, subTitle, blocks = [],
}) => (
  <section className="our-production-area pt-100 pb-70">
    <div className="container">
      <div className="section-title">
        { superTitle && <span>{superTitle}</span> }
        <h2>{title}</h2>
        { subTitle && <span>{subTitle}</span>}
      </div>

      <div className="row">
        { blocks && Boolean(blocks.length) && blocks.map(({ icon, title, body }) => (
          <div className="col-lg-4 col-sm-6">
            <div className="what-we-do-item">
              <i className={icon} />
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IconBlockSet;
