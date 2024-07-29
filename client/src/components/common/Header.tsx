import { useNavigate, NavLink } from "react-router-dom";
import { LogoutBtn, Logo, Hero } from "../index";
import { routeConfig } from "../../router/route.config";

function Header() {
  const navigate = useNavigate();

  return (
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
            <li>
              <LogoutBtn />
            </li>
          </ul>
        </nav>
      </header>
      <Hero />
    </>
  );
}

export default Header;
