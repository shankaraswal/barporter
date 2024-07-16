import { useSelector } from "react-redux";
import { useNavigate, Link, NavLink, Outlet, To } from "react-router-dom";
import { Container, LogoutBtn, Logo } from "../index";
import { routeConfig } from "../../router/route.config";
import { ReactElement, JSXElementConstructor, ReactNode, Key } from "react";

function Header() {
  const navigate = useNavigate();

  return (
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
  );
}

export default Header;
