import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "../components/index";
import { useDispatch } from "react-redux";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  return (
    <div className="justify-center">
      <div className="my-10 flex justify-center">
        <Logo baseWidth="100px" />
      </div>
      <h2 className="text-center text-teal-800 text-2xl font-bold">
        Sign up as a Trader to create account
      </h2>
      <p className="mt-2 text-center text-base text-black/60">
        Already have an account?
        <NavLink
          to="/signin"
          className="ml-3 font-medium text-primary text-red-600 underline transition-all duration-200 hover:underline"
        >
          Sign In
        </NavLink>
      </p>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <div className="w-full h-full">
        <form className="flex flex-nowrap gap-10 p-10">
          <div className="w-full lg:w-1/2 space-y-6">
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
          <div className="w-full lg:w-1/2 space-y-6">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value: string) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
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
            type="submit"
            onClick={() => navigate("/profile")}
            className="w-1/3 bg-teal-900 hover:bg-teal-700 py-3 text-2xl mt-4"
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
