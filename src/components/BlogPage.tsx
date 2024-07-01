import React, { useState, useEffect } from 'react';
import './BlogPage.css';
import sanityClient from '@sanity/client';

interface Blog {
  _id: string;
  title: string;
  body: any[];
  mainImage: {
    asset: {
      url: string;
    };
  };
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    sanityClient.fetch<Blog[]>('*[_type == "blogPost"]').then((data: React.SetStateAction<Blog[]>) => setBlogs(data));}, []);

  const handleCardClick = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="blog-page-content">
      <div className="sidebar">
        <h2>Blog Posts</h2>
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className={`card ${selectedBlog?._id === blog._id ? 'selected' : ''}`}
            onClick={() => handleCardClick(blog)}
          >
            <img src={blog.mainImage.asset.url} alt={blog.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{blog.title}</h2>
              <p className="card-description">{blog.body[0]?.children[0]?.text.substring(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>
      <div className="main-content">
        {!selectedBlog && <h1>Select a blog post to read</h1>}
        {selectedBlog && (
          <div className="blog-page">
            <h1 className="blog-title">{selectedBlog.title}</h1>
            <div className="blog-content">
              {selectedBlog.body.map((block) => block.children.map((child: { text: any; }) => child.text).join(' ')).join('\n')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
