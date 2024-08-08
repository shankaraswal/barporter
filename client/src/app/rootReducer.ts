import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
