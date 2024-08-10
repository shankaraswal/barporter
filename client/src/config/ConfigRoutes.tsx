import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "../app/App";
import ProtectedRoute from "./ProtectedRoutes";
import { Home, Signup, Signin, Profile, Plp, PlpA, Pdp, Pnf } from "../pages";

export const routeConfig = {
  path: "/",
  element: <Layout />,
  name: "",
  slug: "",
  secure: false,
  navpart: true,
  children: [
    {
      path: "/home",
      slug: "home",
      element: <Home />,
      name: "Home",
      secure: false,
      navpart: true,
    },
    {
      path: "/",
      slug: "signin",
      element: <Signin />,
      name: "Sign In",
      secure: false,
      navpart: true,
    },
    {
      path: "/signup",
      slug: "signup",
      element: <Signup />,
      name: "Sign Up",
      secure: false,
      navpart: false,
    },
    {
      path: "/profile",
      slug: "profile",
      element: <PlpA />,
      name: "User Profile",
      secure: true,
      navpart: true,
    },
    {
      path: "/list",
      slug: "list",
      element: <Plp />,
      name: "Item List",
      secure: true,
      navpart: true,
    },
    {
      path: "/detail",
      slug: "detail",
      element: <Pdp />,
      name: "Item Detail",
      secure: true,
      navpart: false,
    },
  ],
};

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {routeConfig.children.map((route: any, index: number) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.secure ? (
                <ProtectedRoute element={route.element} />
              ) : (
                route.element
              )
            }
          />
        ))}
        <Route path="*" element={<Pnf />} />
      </Route>
    </>
  )
);
