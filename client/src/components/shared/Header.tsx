import { useNavigate } from "react-router-dom";
import { LogoutBtn, Logo, Hero } from "../index";
import { routeConfig } from "../../config/ConfigRoutes";
import useAuth from "../../hooks/useAuth";
import { generateRandomString } from "../../utils/helpers";
import { ProfileMenu } from "../index";

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className="py-2 shadow-2xl bg-stone-700 bg-opacity-50 absolute top-0 left-0 right-0 z-15 shadow-neutral-[400] drop-shadow-xl border-neutral-500 border-b">
        <nav className="flex max-w-[1440px] mx-auto">
          <Logo baseWidth="60px" />
          <ul className="flex ml-auto items-center">
            {routeConfig.children.map((nav: any) => {
              if (nav.navpart === false) return null;
              if (
                isLoggedIn &&
                (nav.slug === "signin" || nav.slug === "signup")
              ) {
                return null;
              }
              if (!isLoggedIn && nav.secure) {
                return null;
              }

              return (
                <li key={nav.name}>
                  <button
                    onClick={() => navigate(nav.path)}
                    className="mx-2 text-white text-2xl inline-block py-2 px-6 duration-200 hover:bg-slate-800 hover:border-red-100 rounded-md border-2 border-transparent"
                  >
                    {nav.name}
                  </button>
                </li>
              );
            })}
            {/* 
            // TODO: Remove this link */}
            <li>
              <button
                onClick={() => navigate(generateRandomString())}
                className="mx-2 text-white text-2xl inline-block py-2 px-6 duration-200 hover:bg-slate-800 hover:border-red-100 rounded-md border-2 border-transparent"
              >
                Broken Link
              </button>
            </li>

            {isLoggedIn && (
              <>
                <li className="ml-10">
                  <ProfileMenu />
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <Hero />
    </>
  );
}

export default Header;
