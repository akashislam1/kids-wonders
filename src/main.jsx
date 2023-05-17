import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="w-full p-2 md:w-5/6 mx-auto ">
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </div>
);
