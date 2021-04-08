import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BlogSidebar = ({ post }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          'https://api.cosmicjs.com/v2/buckets/jays-modern-life-production/objects?pretty=true&limit=3&query=%7B%22type%22%3A%22posts%22%7D&read_key=3HY3Blxg8HB9HXNp5h8hhlY20ZpdZ7KIErxcCQQb9CCcKs7d8w&limit=20&props=slug,title,content,metadata,',
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
    <div className="sidebar-wrap">
      <div className="search-wrap sidebar-widget">
        <form className="search-form">
          <input className="form-control" name="search" placeholder="SEARCH" type="text" />
          <button className="search-button" type="submit">
            <i className="bx bx-search" />
          </button>
        </form>
      </div>

      <div className="popular-post-wrap sidebar-widget">
        <h3>Recent Post</h3>
        <ul>
          { Boolean(data && data.length) && data.filter((p) => post.slug != p.slug).map((p) => (
            <li>
              <Link href="#">
                <a>
                  <img src="/img/blog-details/popular-img-1.jpg" alt="Image" />
                  <h3>{p.title}</h3>
                  <span>{p.metadata.post_date}</span>
                </a>
              </Link>
            </li>
          )) }
        </ul>
      </div>

      <div className="categories-wrap sidebar-widget">
        <h3>Categories</h3>

        <ul>
          <li>
            <Link href="#"><a>Film</a></Link>
          </li>
          <li>
            <Link href="#"><a>Gear</a></Link>
          </li>
          <li>
            <Link href="#"><a>Community</a></Link>
          </li>
          <li>
            <Link href="#"><a>Projects</a></Link>
          </li>
        </ul>
      </div>

      <div className="about-wrap sidebar-widget">
        <h3>About</h3>
        <img src="/img/main-slider/main-slider1.jpg" alt="Image" />
        <p>I'm a US based film-maker specializing in a more cinematic approach to videos for your music, wedding, promotional, or corporate video.</p>
      </div>

      <div className="tags-wrap sidebar-widget">
        <h3>Tags</h3>

        <ul>
          <li>
            <Link href="#"><a>Film</a></Link>
          </li>
          <li>
            <Link href="#"><a>Gear</a></Link>
          </li>
          <li>
            <Link href="#"><a>Community</a></Link>
          </li>
          <li>
            <Link href="#"><a>Projects</a></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
