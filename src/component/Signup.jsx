import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Login from "./login";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      username: data.username,
      password: data.password,
      fullname: data.fullname,
    };
    console.log(userInfo);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/register",
        userInfo
      );
      console.log("Successfully signed up", res);
      setErrorMessage(""); // Clear error message if signup is successful
      localStorage.setItem("users", JSON.stringify(res.data)); // Save user data to local storage
      toast.success("Successfully signed up");
      document.getElementById("my_modal_2").close();
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage("User already exists");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
      toast.error("Error: " + errorMessage);
      console.log(error);
    }
  };

  return (
    <div className="md:order-2 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
      <div className="w-[30%] overflow-hidden m-auto">
        <div className="max-screen-xl m-auto justify-center border border-gray-500 rounded-xl">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost float-right"
            >
              ✕
            </Link>
            <div className="text-center font-bold mt-4">Signup-page</div>
            <div className="space-y-4 m-9">
              <label htmlFor="" className="relative top-2 left-1">
                Fullname
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  {...register("fullname", { required: true })}
                  placeholder="Fullname"
                />
              </label>
              {errors.fullname && (
                <span className="block text-red-700">
                  This field is required
                </span>
              )}

              <label htmlFor="" className="relative top-2 left-1">
                Username
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
              </label>
              {errors.username && (
                <span className="block text-red-700">
                  This field is required
                </span>
              )}

              <label htmlFor="" className="relative top-2 left-1">
                Email
              </label>
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
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </label>
              {errors.email && (
                <span className="block text-red-700">
                  This field is required
                </span>
              )}

              <label className="relative top-2 left-1" htmlFor="">
                Password
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </label>
              {errors.password && (
                <span className="block text-red-700">
                  This field is required
                </span>
              )}

              {errorMessage && (
                <div className="block text-red-700 text-center">
                  {errorMessage}
                </div>
              )}

              <div className="text-center align-middle">
                <button
                  type="submit"
                  className="btn m-auto w-[100px] text-[20px] bg-pink-500 text-white mt-3"
                >
                  Signup
                </button>
              </div>
              <div>
                <p className="m-auto text-center">
                  Registered?{" "}
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                    className="text-blue-700 underline"
                  >
                    Login
                  </button>
                </p>
                <dialog id="my_modal_2" className="modal">
                  <Login />
                </dialog>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
