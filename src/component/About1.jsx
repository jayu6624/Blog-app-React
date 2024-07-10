import React from 'react';

export default function About1() {
  return (
    <div className="py-16 bg-dark">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6 m-auto">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 mt-12">
          <div className="md:w-3/12 lg:w-3/12 transition-transform duration-500 ease-in-out transform hover:scale-110">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="React development"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-9/12 lg:w-6/12">
            <h2 className="text-2xl font-bold md:text-4xl text-white transition-transform duration-500 ease-in-out transform hover:translate-x-2">
              Passionate Developers Creating Engaging Blog Experiences
            </h2>
            <p className="mt-6 text-slate-100">
              Welcome to our blog! Our team of dedicated developers is committed to delivering top-notch blog content and user experiences. We cover a wide range of topics, from web development and design to personal growth and tech trends.
            </p>
            <p className="mt-4 text-slate-100">
              Our mission is to provide readers with insightful articles that inform, inspire, and entertain. Whether you're a tech enthusiast, a seasoned developer, or just someone who loves to read, our blog has something for you.
            </p>
            <p className="mt-4 text-slate-100">
              Stay tuned for regular updates, tutorials, and the latest industry news. We believe in the power of knowledge-sharing and community, and we're excited to have you on this journey with us.
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
