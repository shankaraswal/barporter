import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, logout } from "../features/auth/authSlice";
import type { RootState, AppDispatch } from "../app/store";

const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const { user, isLoggedIn, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const userLogin = (credentials: any) => {
    dispatch(loginUser(credentials));
  };

  const userRegistration = (userData: any) => {
    dispatch(registerUser(userData));
  };

  const userLogout = () => {
    dispatch(logout());
  };

  return {
    user,
    isLoggedIn,
    loading,
    error,
    userLogin,
    userRegistration,
    userLogout,
  };
};

export default useAuth;
