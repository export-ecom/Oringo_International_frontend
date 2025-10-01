import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ post }) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // ✅ Fallback-safe image handling
  const imageUrl =
    post?.image && typeof post.image === "string"
      ? post.image.startsWith("http")
        ? post.image
        : `${API_BASE_URL}${post.image}`
      : "/default-blog.png";

  return (

    <article className="blog-card">
      {/* Blog Thumbnail */}
      <Link to={`/blog/${post.slug}`} className="blog-image-link">
        <img
          src={imageUrl}
          alt={post?.title || "Blog post image"}
          className="blog-card-img"
          loading="lazy"
        />
      </Link>

      {/* Blog Content */}
      <div className="blog-card-content">
        <h2 className="blog-card-title">
          <Link to={`/blog/${post.slug}`} className="blog-title-link">
            {post?.title || "Untitled Post"}
          </Link>
        </h2>

        <p className="blog-date">
          By <span className="blog-author">{post?.author || "Unknown"}</span> •{" "}
          {post?.date || "N/A"}
        </p>

        <p className="blog-excerpt">
          {post?.excerpt || "No preview available for this post."}
        </p>

        <Link to={`/blog/${post.slug}`} className="blog-readmore">
          Read More →
        </Link>
      </div>
    </article>


  );
};

export default BlogCard;
