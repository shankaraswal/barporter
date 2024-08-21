import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { UserData } from "../../features/auth/authSlice";
import dashboardIcon from "../../assets/svg/dashboard.svg";
import userIcon from "../../assets/svg/user.svg";
import logoutIcon from "../../assets/svg/logout.svg";

const ProfileMenu = () => {
  const { userLogout, isLoggedIn, userLogin, user } = useAuth();
  const [isDdOpen, setIsDdOpen] = useState(true);
  const navigate = useNavigate();

  const handleUserLogout = (e: FormEvent) => {
    e.preventDefault();
    userLogout();
  };

  const handleUserMenus = (url: string) => {
    navigate(`/${url}`);
    setIsDdOpen(false);
  };
  if (!isLoggedIn) {
    return null;
  }

  const { username, avatar, email } = user as UserData;

  return (
    <div className="relative right-0 mx-auto bg-neutral-200 rounded-xl ">
      <button
        onClick={() => setIsDdOpen(!isDdOpen)}
        type="button"
        id="dropdownToggle"
        className="px-4 py-2 flex items-center m-auto z-50 text-left flex-row gap-5 w-fit pr-10 bg-white-400 rounded-xl shadow-lg min-w-60"
      >
        {/* <Avatar
          name="Shankar Aswal"
          className="text-white justify-center tracking-widest items-center flex mr-2 text-xl font-semibold w-12 h-12 rounded-full text-center bg-red-600"
        /> */}
        <img src={avatar} className="w-10 h-10 rounded-full shrink-0" />
        <span className="capitalize text-xl tracking-widest">{username}</span>
      </button>
      {isDdOpen && (
        <ul className="absolute right-0 w-full text-xl bg-neutral-200 py-6 mt-[-20px] z-[-1] rounded-xl border-[1px] border-white-400">
          <li className="py-2.5 px-5 flex items-center text-[15px] italic hover:underline text-teal-600 cursor-pointer">
            {email}
          </li>
          <li
            className="py-2.5 px-5 flex items-center hover:text-red-800 cursor-pointer"
            onClick={() => handleUserMenus("profile")}
          >
            <img
              src={userIcon}
              className="w-7 h-7 mr-3 rounded-full shrink-0"
            />
            View profile
          </li>
          <li
            className="py-2.5 px-5 flex items-center hover:text-red-800 cursor-pointer"
            onClick={() => handleUserMenus("home")}
          >
            <img
              src={dashboardIcon}
              className="w-7 h-7 mr-3 rounded-full shrink-0"
            />
            Dashboard
          </li>
          <li
            className="py-2.5 px-5 flex items-center hover:text-red-800 cursor-pointer"
            onClick={handleUserLogout}
          >
            <img
              src={logoutIcon}
              className="w-7 h-7 mr-3 rounded-full shrink-0"
            />
            Logout
          </li>
        </ul>
      )}
    </div>
  );
};
export default ProfileMenu;
