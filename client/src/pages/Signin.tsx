import { Link, useNavigate, NavLink } from "react-router-dom";
import { Button, Input, Logo } from "../components";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="justify-center">
      <div className="my-10 flex justify-center">
        <Logo baseWidth="100px" />
      </div>
      <h2 className="text-center text-teal-800 text-2xl font-bold">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-base text-black/60">
        Don't have any account?
        <NavLink
          to="/signup"
          className="ml-3 font-medium text-primary text-red-600 underline transition-all duration-200 hover:underline"
        >
          Sign Up
        </NavLink>
      </p>
      <div className="space-y-5">
        <Input label="Email: " placeholder="Enter your email" type="email" />
        <Input
          label="Password: "
          type="password"
          placeholder="Enter your password"
        />
        <Button
          onClick={() => {
            navigate("/profile");
          }}
          type="submit"
          className="w-full bg-teal-900 hover:bg-teal-700 py-3 text-2xl"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Login;
