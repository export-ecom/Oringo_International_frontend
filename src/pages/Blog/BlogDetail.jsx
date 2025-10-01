import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogDetail } from "./blogApi";
import SEO from "./SEO";
import "./BlogDetail.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchBlogDetail(slug).then((data) => setPost(data));
  }, [slug]);

  if (!post) {
    return <h2>Post Not Found</h2>;
  }

  return (
    <>
      <Header />

      <div className="page-container">
      <div className="blog-detail">
        <SEO title={post.meta_title} description={post.meta_description} />
        {post.image && <img src={post.image} alt={post.title} className="blog-detail-img" />}
        <h1>{post.title}</h1>
        <p className="blog-date">By {post.author} • {post.date}</p>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <Footer />
      </div>
    </>
  );
};

export default BlogDetail;
