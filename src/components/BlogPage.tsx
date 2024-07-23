import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './BlogPage.css';

interface Blog {
  id: string;
  title: string;
  content: string;
  markdownFile?: string;
}

const BlogPage: React.FC = () => {
  const [blogs] = useState<Blog[]>([
    {
      id: 'blog1',
      title: 'What Did 50 LeetCode Questions taught me? + Amazon Rejection',
      content: 'I started with leetcode a good 50 days back, and attempted my first interview at amazon.\n It is an entry level job in SysDev position.I have failed miserably and here is how it went.\n ',
      markdownFile: 'my-vite-project/src/test.md',
    },
    {
      id: 'blog2',
      title: 'A Guide to the Most Beautiful Beaches Around the World',
      content: 'From the Caribbean to the Mediterranean, explore the most stunning beaches that should be on your travel bucket list. These beaches offer pristine sands, crystal-clear waters, and breathtaking views. Whether you\'re looking for a relaxing getaway or an adventurous vacation, these beaches have something for everyone.',
      markdownFile: 'my-vite-project/src/test.md',
    },
    {
      id: 'blog3',
      title: 'Top 10 Must-Read Books for This Year',
      content: 'Dive into our selection of the best books to read this year, spanning across various genres and topics. From thrilling mysteries to heartwarming romances, these books are sure to captivate and inspire. Whether you\'re looking for a new favorite author or a classic novel, our list has something for everyone.',
      markdownFile: 'my-vite-project/src/test.md',
    },
  ]);

  const [selectedBlog, setSelectedBlog] = useState<string | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    if (selectedBlog) {
      const blog = blogs.find(blog => blog.id === selectedBlog);
      if (blog && blog.markdownFile) {
        fetch(blog.markdownFile)
          .then(response => response.text())
          .then(text => setMarkdownContent(text));
      }
    }
  }, [selectedBlog, blogs]);

  const handleCardClick = (blogId: string) => {
    setSelectedBlog(blogId);
  };

  return (
    <div className="blog-page-content">
      <div className="sidebar">
        <h2>Blog Posts</h2>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`card ${selectedBlog === blog.id ? 'selected' : ''}`}
            onClick={() => handleCardClick(blog.id)}
          >
            <img src="https://placehold.co/400" alt={blog.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{blog.title}</h2>
              <p className="card-description">{blog.content.substring(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>
      <div className="main-content">
        {!selectedBlog && <h1>Select a blog post to read</h1>}
        {selectedBlog && (
          <div className="blog-page">
            <h1 className="blog-title">{blogs.find(blog => blog.id === selectedBlog)?.title}</h1>
            <ReactMarkdown className="blog-content" children={markdownContent} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
