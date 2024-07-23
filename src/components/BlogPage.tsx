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
      title: 'My first Blog',
      content: 'hello guys ',
      markdownFile: '/test.md',
    },
    {
      id: 'blog2',
      title: 'A Guide to the Most Beautiful Beaches Around the World',
      content: 'From the Caribbean to the Mediterranean, explore the most stunning beaches that should be on your travel bucket list. These beaches offer pristine sands, crystal-clear waters, and breathtaking views. Whether you\'re looking for a relaxing getaway or an adventurous vacation, these beaches have something for everyone.',
      markdownFile: '/test.md',
    },
    {
      id: 'blog3',
      title: 'Top 10 Must-Read Books for This Year',
      content: 'Dive into our selection of the best books to read this year, spanning across various genres and topics. From thrilling mysteries to heartwarming romances, these books are sure to captivate and inspire. Whether you\'re looking for a new favorite author or a classic novel, our list has something for everyone.',
      markdownFile: '/test.md',
    },
  ]);

  const [selectedBlog, setSelectedBlog] = useState<string | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [gradients, setGradients] = useState<string[]>([]);

  useEffect(() => {
    const generateRandomGradient = () => {
      const colors = [
        '#ff7e5f', '#feb47b', '#6a11cb', '#2575fc', '#43cea2', '#185a9d', '#f85032', '#e73827', '#ff416c', '#ff4b2b'
      ];
      const startColor = colors[Math.floor(Math.random() * colors.length)];
      const endColor = colors[Math.floor(Math.random() * colors.length)];
      return `linear-gradient(135deg, ${startColor} 0%, ${endColor} 100%)`;
    };

    const newGradients = blogs.map(() => generateRandomGradient());
    setGradients(newGradients);
  }, [blogs]);

  useEffect(() => {
    if (selectedBlog) {
      const blog = blogs.find(blog => blog.id === selectedBlog);
      if (blog && blog.markdownFile) {
        fetch(blog.markdownFile)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.text();
          })
          .then(text => setMarkdownContent(text))
          .catch(error => {
            console.error('Error fetching markdown file:', error);
            setMarkdownContent('Error loading content');
          });
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
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`card ${selectedBlog === blog.id ? 'selected' : ''}`}
            onClick={() => handleCardClick(blog.id)}
          >
            <div
              className="card-gradient"
              style={{ background: gradients[index] }}
            >
              <img src="https://placehold.co/400" alt={blog.title} className="card-image" />
            </div>
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
