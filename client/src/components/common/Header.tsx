<<<<<<< Updated upstream
import { useSelector } from "react-redux";
import { useNavigate, Link, NavLink, Outlet, To } from "react-router-dom";
import { Container, LogoutBtn, Logo } from "../index";
import { routeConfig } from "../../router/route.config";
import { ReactElement, JSXElementConstructor, ReactNode, Key } from "react";
=======
import { useNavigate, NavLink } from "react-router-dom";
import { LogoutBtn, Logo, Hero } from "../index";
import { routeConfig } from "../../config/config.route";
import useAuth from "../../../src/hooks/useAuth";
>>>>>>> Stashed changes

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  return (
<<<<<<< Updated upstream
    <header className="py-3 shadow-md bg-red-600">
      <nav className="flex  max-w-7xl mx-auto">
        <div className="mr-4">
          <NavLink to="/">
            <Logo width="70px" />
          </NavLink>
        </div>
        <ul className="flex ml-auto">
          {routeConfig.children.map((nav: any) => (
            <li key={nav.name}>
              <button
                onClick={() => navigate(nav.path)}
                className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
              >
                {nav.name}
              </button>
            </li>
          ))}
          <li>
            <LogoutBtn />
          </li>
        </ul>
      </nav>
    </header>
=======
    <>
      <header className="py-3 shadow-2xl opacity-90 absolute top-0 left-0 right-0 z-15 shadow-gray-700 drop-shadow-2xl">
        <nav className="flex  max-w-[1440px] mx-auto">
          <Logo baseWidth="80px" />
          <ul className="flex ml-auto  items-center">
            {routeConfig.children.map((nav: any) => (
              <li key={nav.name}>
                <button
                  onClick={() => navigate(nav.path)}
                  className="mx-2 text-white text-2xl inline-bock py-2 px-6 duration-200 hover:bg-slate-800 hover:border-red-100 rounded-md border-2 border-transparent"
                >
                  {nav.name}
                </button>
              </li>
            ))}
            {isLoggedIn && (
              <li>
                <LogoutBtn />
              </li>
            )}
            <li></li>
          </ul>
        </nav>
      </header>
      <Hero />
    </>
>>>>>>> Stashed changes
  );
};

export default Header;
