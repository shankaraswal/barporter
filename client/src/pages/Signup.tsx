import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "../components/index";
import { useDispatch } from "react-redux";
import "./pages.css";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  return (
    <div className="justify-center">
      <div className="py-12 flex justify-center bg-neutral-50 rounded-t-2xl">
        <Logo baseWidth="100px" />
      </div>
      <div className="bg-neutral-50 p-10 rounded-lg rounded-b-2xl py-12">
        <h2 className=" text-center text-teal-700 text-3xl font-bold">
          Sign up for Trader account
        </h2>
        <p className="mt-4 text-center text-neutral-600 text-xl">
          Already have an account?
          <NavLink
            to="/signin"
            className="ml-3 font-medium text-primary text-red-700 underline transition-all duration-200 hover:underline"
          >
            Sign In
          </NavLink>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <div className="w-full h-full min-w-[800px]">
          <form className="flex flex-nowrap gap-10 py-10 my-8 w-full ">
            <div className="w-full lg:w-1/2 space-y-8 custom-signup-class">
              <Input
                label="Full Name: "
                placeholder="Enter your full name"
                {...register("name", {
                  required: true,
                })}
              />
              <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
              />
              <Input
                label="Mobile Number: "
                type="text"
                placeholder="Enter your mobile number"
                {...register("mobile", {
                  required: true,
                })}
              />
              <Input
                label="Location: "
                type="text"
                placeholder="Enter your location"
                {...register("location", {
                  required: true,
                })}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8 custom-signup-class">
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value: string) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
              <Input
                label="Confirm Password: "
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: true,
                })}
              />
              <Input
                label="About: "
                type="text"
                placeholder="Enter something about yourself"
                {...register("about", {
                  required: true,
                })}
              />
              <Input
                label="Avatar: "
                type="text"
                placeholder="Enter avatar URL"
                {...register("avatar", {
                  required: true,
                })}
              />
            </div>
          </form>
          <div className="w-full flex justify-center">
            <Button
              onClick={() => navigate("/profile")}
              type="submit"
              className="flex flex-col text-center items-center w-full max-w-[300px] bg-teal-900 m-auto hover:bg-teal-700 py-3  text-2xl"
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
