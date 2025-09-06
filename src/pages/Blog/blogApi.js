// src/services/blogApi.js
import API from "../../api/api";

export const fetchBlogs = async () => {
    const response = await API.get("/blogs/");
    return response.data;
};

export const fetchBlogDetail = async (slug) => {
    const response = await API.get(`/blogs/${slug}/`);
    return response.data;
};
