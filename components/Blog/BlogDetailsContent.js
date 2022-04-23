import React from 'react';
import Link from 'next/link';
import Comments from './Comments';

const BlogDetailsContent = ({ post }) => (
  <div className="blog-details-wrap">
    <div className="blog-top-content-wrap">
      <img src={post?.metadata?.post_image.url} alt="Image" />

      <ul className="post-details">
        <li>
          <i className="bx bx-user" />
          By Jay
        </li>
        <li>
          <i className="bx bx-calendar" />
          {post.post_date}
        </li>
        <li>
          <i className="bx bx-comment" />
          No Comments
        </li>
      </ul>

      <div dangerouslySetInnerHTML={{ __html: post.metadata?.body }} />
    </div>

    <div className="tags-and-shear-wrap">
      <div className="row">
        <div className="col-lg-6 col-md-7">
          <ul className="tag-list">
            <li>
              <span>Tags:</span>
            </li>
            {
              Boolean(post.metadata?.tags && post.metadata.tags.length) && post.metadata.tags.map((tag) => (
                <li>
                  <Link href="#"><a>{tag.name}</a></Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="col-lg-6 col-md-5">
          <ul className="social-wrap">
            <li className="follow-us" style={{ marginRight: '10px' }}>
              <h6>Follow Me:</h6>
            </li>
            <li>
              <a href="https://instagram.com/jaydoesvideo" target="_blank" rel="noreferrer">
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a href="https://tiktok.com/@jaydoesvideo" target="_blank" rel="noreferrer">
                <i className="socialicon-tiktok" />
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/jaydoesvideo" target="_blank" rel="noreferrer">
                <i className="socialicon-vimeo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* <div className="post-next-and-prev-wrap">
      <div className="row">
        <div className="col-6">
          <div className="prev-img">
            <Link href="#">
              <a>
                <img src="/img/blog-details/prev-img.jpg" alt="Image" />
                <h3>Prev Post</h3>
              </a>
            </Link>
          </div>
        </div>

        <div className="col-6">
          <div className="next-img">
            <Link href="#">
              <a>
                <img src="/img/blog-details/next-img.jpg" alt="Image" />
                <h3>Next Post</h3>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div> */}

    {/* Comments & Comments Form */}
    {/* <Comments /> */}
  </div>
);

export default BlogDetailsContent;
