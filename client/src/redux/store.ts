import { combineReducers } from "redux";
import { useDispatch } from "react-redux";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// Import your slices here
// import authReducer from "../features/auth/authSlice";
// import userReducer from "../features/user/userSlice";
// import itemReducer from "../features/item/itemSlice";

// Combine reducers
const rootReducer = combineReducers({
  //   auth: authReducer,
  user: { name: "shankar" },
  //   item: itemReducer,
  // Add more reducers here
});

// Create and configure store
const store = configureStore({
  reducer: rootReducer,
  // You can add middleware here if needed
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Define types for better TypeScript support
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Create a custom hook to use the `AppDispatch` type
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
