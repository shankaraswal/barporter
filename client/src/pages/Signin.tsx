import React, { useState, FormEvent, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Button, Input, Logo } from "../components";
import useAuth from "../hooks/useAuth";

function Login() {
<<<<<<< Updated upstream
  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-white rounded-xl p-10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo />
          </span>
        </div>
        <h2 className="text-center text-teal-800 text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don't have any account?
          <NavLink
            to="/signup"
            className="ml-3 font-medium text-primary text-red-600 underline transition-all duration-200 hover:underline"
=======
  const navigate = useNavigate();
  const { userLogin, loading, error, isLoggedIn } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "bbb@test.com",
    password: "123456",
  });

  const handleUserLogin = (e: FormEvent) => {
    e.preventDefault();
    userLogin(credentials);
  };

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
    if (isLoggedIn) handleRedirect();
  }, [isLoggedIn]);

  const handleRedirect = () => navigate("/profile");
  return (
    <div className="justify-center max-w-[500px] mx-auto">
      <div className="mb-10 flex justify-center">
        <Logo baseWidth="100px" />
      </div>
      <div className=" bg-gray-300 p-20 text-gray-700 rounded-lg mt-10">
        <h2 className="text-center text-3xl font-bold">
          Sign in to your account
        </h2>
        <p className="mt-4 text-center text-xl">
          Don't have any account?
          <NavLink
            to="/signup"
            className="ml-3 font-medium text-primary underline transition-all duration-200 hover:underline"
>>>>>>> Stashed changes
          >
            Sign Up
          </NavLink>
        </p>
<<<<<<< Updated upstream
        <div className="space-y-5">
          <Input label="Email: " placeholder="Enter your email" type="email" />
          <Input
            label="Password: "
            type="password"
            placeholder="Enter your password"
          />
          <Button
            type="submit"
            className="w-full bg-teal-900 hover:bg-teal-700 py-3 text-2xl"
          >
            Sign in
          </Button>
        </div>
=======
        <div className="space-y-8 text-2xl mt-10 flex-col">
          <form onSubmit={handleUserLogin}>
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              style={{ padding: "20px" }}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              style={{ padding: "20px" }}
            />
            <Button
              onClick={handleUserLogin}
              type="submit"
              className="w-full my-10 bg-teal-900 hover:bg-teal-700 py-3 text-2xl"
            >
              Sign in
            </Button>
          </form>
        </div>
        {loading && (
          <>
            <p>loader...</p>
          </>
        )}
        {error && <div>{error}</div>}
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default Login;
