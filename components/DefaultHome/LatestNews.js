import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const LatestNews = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          'https://api.cosmicjs.com/v2/buckets/jays-modern-life-production/objects?pretty=true&query=%7B%22type%22%3A%22posts%22%7D&read_key=3HY3Blxg8HB9HXNp5h8hhlY20ZpdZ7KIErxcCQQb9CCcKs7d8w&limit=20&props=slug,title,content,metadata,',
        );
        if (result.ok) {
          const { objects } = await result.json();
          console.log('result', objects);
          setData(objects);
        }
      } catch (e) {
        console.log('e');
      }
      setLoading(false);
    };

    fetchBlogPosts();
  }, []);
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

export default LatestNews;
