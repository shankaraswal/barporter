import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import Layout from "../layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoutes";
import { Home, Signup, Signin, Profile, Plp, Pdp, Pnf, Clp } from "../pages";

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
      secure: true,
      navpart: false,
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
      element: <Profile />,
      name: "User Profile",
      secure: true,
      navpart: false,
    },
    {
      path: "/categories",
      slug: "categories",
      element: <Clp />,
      name: "Categories",
      secure: true,
      navpart: false,
    },
    {
      path: "/products",
      slug: "products",
      element: <Plp />,
      name: "Products",
      secure: true,
      navpart: true,
    },
    {
      path: "/products/category/:category",
      slug: "category-products",
      element: <Plp />, // Category-specific product listing
      name: "Category Products",
      secure: true,
      navpart: false,
    },
    {
      path: "/products/search",
      slug: "search-products",
      element: <Plp />, // Search-specific product listing
      name: "Search Products",
      secure: true,
      navpart: false,
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
        <Route
          path="*"
          element={<Navigate to="/" />} // Redirect to a default route if no match
        />
      </Route>
    </>
  )
);
