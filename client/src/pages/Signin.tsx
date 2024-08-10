import React, { useState, FormEvent, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Button, Input, Logo } from "../components";
import useAuth from "../hooks/useAuth";

function Signin() {
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
    if (isLoggedIn) handleRedirect();
  }, [isLoggedIn]);

  const handleRedirect = () => navigate("/list");

  return (
    <div className="justify-center max-w-[500px] mx-auto">
      <div className="mb-10 flex justify-center">
        <Logo baseWidth="100px" />
      </div>
      <div className=" bg-gray-300 p-20 rounded-lg mt-10">
        <h2 className="text-center text-teal-700 text-3xl font-bold">
          Sign in to your account
        </h2>

        <p className="mt-4 text-center text-neutral-600 text-xl">
          Don't have any account?
          <NavLink
            to="/signup"
            className="ml-3 font-medium text-primary text-red-700 underline transition-all duration-200 hover:underline"
          >
            Sign Up
          </NavLink>
        </p>
        <div className="space-y-8 text-2xl mt-10 flex-col">
          <form onSubmit={handleUserLogin} className="space-y-8 text-teal-700">
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
      </div>
    </div>
  );
}

export default Signin;
