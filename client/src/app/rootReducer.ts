import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
import { productService } from "../features/products/productService";

const testReducer = (state = { name: "shankar" }) => {
  return state;
};

const rootReducer = combineReducers({
  auth: authReducer,
  test: testReducer,
  productService: productService.reducer,
});

export default rootReducer;
