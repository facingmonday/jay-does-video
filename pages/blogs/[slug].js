import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import BlogDetailsContent from '../../components/Blog/BlogDetailsContent';
import BlogSidebar from '../../components/Blog/BlogSidebar';
import Footer from '../../components/_App/Footer';

export async function getStaticPaths() {
  // Return a list of possible value for id
  const result = await fetch(
    'https://api.cosmicjs.com/v2/buckets/jays-modern-life-production/objects?pretty=true&query=%7B%22type%22%3A%22posts%22%7D&read_key=3HY3Blxg8HB9HXNp5h8hhlY20ZpdZ7KIErxcCQQb9CCcKs7d8w&limit=20&props=id,slug,title,content,metadata,',
  );
  if (result.ok) {
    const { objects } = await result.json();
    console.log('result', objects);
    const paths = objects.map((post) => ({ params: { slug: post.slug } }));
    return {
      paths,
      fallback: false,
    };
  }
  return {};
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  console.log('params', params);
  const result = await fetch(
    `https://api.cosmicjs.com/v2/buckets/jays-modern-life-production/objects?pretty=true&read_key=3HY3Blxg8HB9HXNp5h8hhlY20ZpdZ7KIErxcCQQb9CCcKs7d8w&props=slug,title,content,metadata&query={"slug":"${params.slug}"}`,
  );
  console.log(result);
  if (result.ok) {
    const { objects } = await result.json();
    console.log('objects', objects);
    return {
      props: {
        post: objects[0],
      },
    };
  }
  return {
    props: {
    },
  };
}

const BlogDetails = ({ post }) => (
  <>
    <Navbar />
    <PageBanner
      pageTitle={post.title}
      homePageUrl="/blogs"
      homePageText="Blogs"
      activePageText={post.title}
      imgClass="bg-5"
    />

    <div className="blog-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogDetailsContent post={post} />
          </div>
          <div className="col-lg-4">
            {/* Blog Sidebar */}
            <BlogSidebar post={post} />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default BlogDetails;
