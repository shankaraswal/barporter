import { configureStore } from "@reduxjs/toolkit";
import { productService } from "../features/products/productService";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    [productService.reducerPath]: productService.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
