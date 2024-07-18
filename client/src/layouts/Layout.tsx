import { NavLink, Outlet } from "react-router-dom";
import { Container, Footer, Header } from "../components";
const Layout = () => {
  return (
    <div
      className="w-full flex-row bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
     from-neutral-300 to-neutral-200 min-h-screen"
    >
      <Header />
      <div className="mx-auto w-full min-h-[680px]  max-w-[1440px] bg-neutral-100 rounded-xl p-20 mb-32 -mt-60">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
