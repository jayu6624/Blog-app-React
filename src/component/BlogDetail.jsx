import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/blogs/${id}`);
        setBlog(res.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">{blog.blog_title}</h1>
      {/* <img src={blog.blog_logo} alt={blog.blog_title} className="w-full h-64 object-cover rounded-lg mb-6" /> */}
      <p className="text-lg text-gray-600 leading-relaxed">{blog.description}</p>
    </div>
  );
}

export default BlogDetail;
