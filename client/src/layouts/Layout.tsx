import { NavLink, Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
const Layout = () => {
  return (
    <div className="w-full">
      {/* <Header /> */}
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
