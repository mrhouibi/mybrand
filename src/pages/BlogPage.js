import React, { useEffect, useRef } from 'react';

function BlogPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pageRef.current) {
      pageRef.current.classList.add('page-visible');
    }
  }, []);

  const posts = [
    {
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape, from AI-powered tools to edge computing and beyond.',
      tag: 'tech',
      tagLabel: 'Technology',
      date: 'Dec 15, 2024',
      author: 'Alex Rivera',
      initials: 'AR',
      readTime: '5 min read',
      color: 'linear-gradient(135deg, #6c63ff, #8b85ff)',
      icon: 'fas fa-laptop-code',
    },
    {
      title: 'Design Systems: A Complete Guide',
      excerpt: 'Learn how to build and maintain a design system that scales with your organization and keeps your products consistent.',
      tag: 'design',
      tagLabel: 'Design',
      date: 'Dec 10, 2024',
      author: 'Jordan Lee',
      initials: 'JL',
      readTime: '8 min read',
      color: 'linear-gradient(135deg, #ff6584, #ff8a9e)',
      icon: 'fas fa-paint-brush',
    },
    {
      title: 'Scaling Your Startup: Lessons Learned',
      excerpt: 'Practical insights from scaling a tech startup from zero to 1 million users. Infrastructure, team, and culture.',
      tag: 'business',
      tagLabel: 'Business',
      date: 'Dec 5, 2024',
      author: 'Sam Patel',
      initials: 'SP',
      readTime: '6 min read',
      color: 'linear-gradient(135deg, #00c851, #00e676)',
      icon: 'fas fa-chart-line',
    },
    {
      title: 'React Performance Optimization Tips',
      excerpt: 'Master React performance with memoization, code splitting, virtualization, and other advanced techniques.',
      tag: 'tech',
      tagLabel: 'Technology',
      date: 'Nov 28, 2024',
      author: 'Alex Rivera',
      initials: 'AR',
      readTime: '7 min read',
      color: 'linear-gradient(135deg, #00d2ff, #3a7bd5)',
      icon: 'fas fa-bolt',
    },
    {
      title: 'The Art of User-Centered Design',
      excerpt: 'Why putting users first leads to better products. Research methods, testing strategies, and real-world examples.',
      tag: 'design',
      tagLabel: 'Design',
      date: 'Nov 20, 2024',
      author: 'Jordan Lee',
      initials: 'JL',
      readTime: '4 min read',
      color: 'linear-gradient(135deg, #ff9800, #ffc107)',
      icon: 'fas fa-users',
    },
    {
      title: 'Cloud Architecture Best Practices',
      excerpt: 'Design resilient, scalable cloud architectures using microservices, serverless, and container orchestration.',
      tag: 'tech',
      tagLabel: 'Technology',
      date: 'Nov 15, 2024',
      author: 'Sam Patel',
      initials: 'SP',
      readTime: '9 min read',
      color: 'linear-gradient(135deg, #e040fb, #ea80fc)',
      icon: 'fas fa-cloud',
    },
  ];

  return (
    <div ref={pageRef} className="page-enter">
      {/* ======== HERO ======== */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="section-title" style={{ marginBottom: '16px' }}>
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '0' }}>
            Insights, tutorials, and stories from our team. Stay up to date
            with the latest in technology and design.
          </p>
        </div>
      </section>

      {/* ======== BLOG POSTS ======== */}
      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, i) => (
              <article className="blog-card" key={i}>
                <div
                  className="blog-card-image"
                  style={{ background: post.color }}
                >
                  <i className={post.icon}></i>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className={`blog-tag ${post.tag}`}>{post.tagLabel}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <div className="blog-card-footer">
                  <div className="blog-author">
                    <div className="blog-author-avatar">{post.initials}</div>
                    <span className="blog-author-name">{post.author}</span>
                  </div>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======== NEWSLETTER CTA ======== */}
      <section className="cta-section">
        <div className="container">
          <h2>Never Miss a Post</h2>
          <p>Subscribe to our newsletter and get the latest articles delivered to your inbox.</p>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()} style={{ gap: '12px' }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  padding: '16px 24px',
                  borderRadius: 'var(--radius-xl)',
                  fontSize: '1rem',
                }}
              />
              <button
                type="submit"
                className="btn"
                style={{
                  background: 'white',
                  color: 'var(--primary)',
                  fontWeight: 700,
                  padding: '16px 32px',
                  borderRadius: 'var(--radius-xl)',
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;