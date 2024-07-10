import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Allblogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/blogs");
        console.log(res.data);
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    getBlogs();
  }, []);

  const truncateTitle = (title) => {
    if (title.length > 10) {
      return title.substring(0, 10) + "...";
    }
    return title;
  };

  return (
    <div className="md:order-2 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
      <div className="container m-auto mt-28 w-[90%]">
        <div className="flex w-full">
          <h1 className="text-3xl ml-7 m-4 font-bold flex">All Blogs</h1>
          <Link
            to="/blog/create"
            className="flex m-auto float-right mt- md:mr-8 bg-orange-600 p-2 rounded-xl border border-white"
          >
            Create A Blog
          </Link>
        </div>

        {blogs.length > 0 ? (
          blogs.slice().reverse().map((item) => (
            <div
              className="bg-slate-500 bg-opacity-45 border-2 border-white flex m-5 p-2 items-center justify-between rounded-xl"
              key={item._id}
            >
              <h1 className="p-4 font-medium">
                <span className="block md:hidden">
                  {truncateTitle(item.blog_title)}
                </span>
                <span className="hidden md:block">
                  {item.blog_title}
                </span>
              </h1>
              <div className="flex">
                <button
                  to={`/blog/${item._id}`}
                  className="flex relative bg-red-700 rounded-lg p-2 m-2 md:w-24 w-full justify-center text-slate-300"
                >
                  Delete
                </button>
                <Link
                  to={`/blog/${item._id}`}
                  className="flex relative bg-green-700 bg-opacity-90 rounded-lg p-2 m-2 md:w-24 w-full justify-center text-slate-300"
                >
                  Read
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
}

export default Allblogs;
