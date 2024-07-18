import { NavLink, Outlet } from "react-router-dom";
import { Container, Footer, Header } from "../components";
const Layout = () => {
  return (
<<<<<<< Updated upstream
    <div className="w-full">
      {/* <Header /> */}
      <div className="">
=======
    <div
      className="w-full flex-row bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
     from-white to-slate-600 min-h-screen"
    >
      <Header />
      <div className="mx-auto w-full  max-w-[1440px] bg-slate-50 rounded-xl p-10 mb-32 -mt-60">
>>>>>>> Stashed changes
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
