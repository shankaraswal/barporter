import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "../layouts/Layout";
import { Home, Signup, Signin, Profile, ItemList, ItemDetail } from "../pages";

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
      element: <Profile />,
      name: "User Profile",
      secure: true,
    },
    {
      path: "/list",
      element: <ItemList />,
      name: "Item List",
      secure: true,
    },
    {
      path: "/detail",
      element: <ItemDetail />,
      name: "Item Detail",
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
