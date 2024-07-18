import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "../layouts/Layout";
<<<<<<< Updated upstream
import UserProfile from "../pages/UserProfile";
import { Home, Signup, Signin, Profile } from "../pages";
=======
import { Home, Signup, Signin, Profile, ItemList } from "../pages";
>>>>>>> Stashed changes

export const routeConfig = {
  path: "/",
  element: <Layout />,
  name: "",
  secure: false,
  children: [
    {
      path: "/",
      element: <Home />,
      name: "Home",
      secure: false,
    },
    {
      path: "/signin",
      element: <Signin />,
      name: "Sign In",
      secure: false,
    },
    {
      path: "/signup",
      element: <Signup />,
      name: "Sign Up",
      secure: false,
    },
    {
      path: "/profile",
      element: <UserProfile />,
      name: "User Profile",
      secure: true,
    },
    {
      path: "/list",
      element: <ItemList />,
      name: "Item List",
      secure: true,
    },
  ],
};

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {routeConfig.children.map((route: any, index: number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="*" element={<Home />} />
    </>
  )
);
