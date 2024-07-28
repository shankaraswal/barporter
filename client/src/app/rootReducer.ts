import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";

const rootReducer = combineReducers({
  default: { name: "SHANKAR SINGH ASWAL" },
  auth: authReducer,
});

export default rootReducer;
