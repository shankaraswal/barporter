import React, { useState, FormEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";

function LogoutBtn() {
  const { userLogout } = useAuth();

  const handleUserLogout = (e: FormEvent) => {
    e.preventDefault();
    userLogout();
  };

  return (
    <button
      onClick={handleUserLogout}
      className="mx-2 text-white text-2xl inline-bock py-2 px-6 duration-200 hover:bg-red-800 hover:border-red-100 rounded-md border-2 border-transparent"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
