import { configureStore } from "@reduxjs/toolkit";
import { productService } from "../features/products/productService";
import { itemService } from "../features/items/itemService";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    [productService.reducerPath]: productService.reducer,
    [itemService.reducerPath]: itemService.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productService.middleware)
      .concat(itemService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
