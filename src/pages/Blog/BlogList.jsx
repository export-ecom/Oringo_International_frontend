import React, { useState, useEffect } from "react";
import { fetchBlogs } from "./blogApi";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SEO from "./SEO";
import "./BlogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  useEffect(() => {
    fetchBlogs().then((data) => setBlogs(data));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Header />
      <div className="blog-container">
        <SEO
          title="Blog & News | TickHive"
          description="Latest updates and stories from TickHive"
        />

        <h1 className="blog-title">📰 Blog & News</h1>
        <p className="blog-subtitle">
          Stay updated with the latest insights, trends, and announcements
        </p>

        <div className="blog-grid">
          {currentPosts.map((post, index) => (
            <div style={{ animationDelay: `${index * 0.15}s` }} key={post.id}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(blogs.length / postsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
      <Footer />
    </>
  );
};

export default BlogList;
