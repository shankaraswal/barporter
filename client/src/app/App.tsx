import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
const Layout = () => {
  return (
    <div
      className="w-full flex-row bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
     from-neutral-50 to-neutral-300 min-h-screen"
    >
      <Header />
      <div className="mx-auto w-full min-h-60 max-w-[1440px] bg-neutral-50 rounded-xl p-20 mb-32 -mt-24">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
