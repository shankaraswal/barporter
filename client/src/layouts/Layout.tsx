import { NavLink, Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
const Layout = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-200 to-teal-700 min-h-screen"
    >
      {/* <Header /> */}
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
