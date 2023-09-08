import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import ThemeProvider from "./providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <div className="max-w-7xl mx-auto">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  </ThemeProvider>
);
