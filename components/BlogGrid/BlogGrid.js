import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

const BlogGrid = ({
  onLoad = () => null, blogs = [], styles, loading, error,
}) => {
  useEffect(() => {
    if (typeof onLoad === 'function') {
      onLoad();
    }
  }, []);
  if (loading) {
    return (
      <section className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <span className="spinner" />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="blog-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="top-title">News Feeds</span>
          <h2>Get The Latest News</h2>
        </div>

        <div className="row">
          {data && data.length ? data.map((post) => (
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href={`/blogs/${post.slug}`}>
                  <a><img src={post.metadata.thumbnail.url} alt="Image" /></a>
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="flaticon-user" />
                      <Link href="#"><a>Jay</a></Link>
                    </li>
                    <li>
                      <i className="flaticon-calendar" />
                      {post.metadata.posted_date}
                    </li>
                  </ul>

                  <Link href={`/blogs/${post.slug}`}>
                    <a>
                      <h3>{post.title}</h3>
                    </a>
                  </Link>
                  <p>{post.metadata.summary}</p>

                  <Link href={`/blogs/${post.slug}`}>
                    <a className="read-more">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
