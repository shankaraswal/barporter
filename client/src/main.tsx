import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { routes } from "./router/route.config";
import store from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div
    className="flex h-full flex-col items-center justify-center 
  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-200 to-teal-700 min-h-screen"
  >
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </React.StrictMode>
  </div>
);
