import React from "react";

function Div() {
  return (
    <div className="md:order-2 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-16">
      <div className="w-full md:w-1/2 md:order-2 order-1">
        <img
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="bg-none flex w-[70%] rounded-lg justify-center m-auto text-center mt-20"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 md:order-1 order-2">
        <div className="m-auto w-[90%] space-y-6">
          <h1 className="font-bold text-4xl mt-20">
            Hello, Welcome here to learn something{" "}
            <span className="text-pink-500">new everyday !!!</span>{" "}
          </h1>
          <p className="text-white text-l ">
            Welcome to BookMart, your ultimate book discovery and sharing
            platform! Connect with a global community of readers, find
            personalized recommendations, and share your favorite reads. Whether
            you're a passionate reviewer or a casual reader, BookMart is the
            place for you. Join us today and embark on your next literary
            adventure!
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow w-[90%]" placeholder="Email" />
          </label>
          <center>
            <button className="btn btn-secondary text-white text-bold align-middle w-24">
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Div;
