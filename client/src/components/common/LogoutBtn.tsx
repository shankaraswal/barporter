import React from "react";
import { useDispatch } from "react-redux";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <button
      onClick={logoutHandler}
      className="mx-2 text-white text-2xl inline-bock py-2 px-6 duration-200 hover:bg-red-800 hover:border-red-100 rounded-md border-2 border-transparent"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
