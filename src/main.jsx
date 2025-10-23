import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import ContextProvider from "./Context/ContextProvider/ContextProvider";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "./Theme/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<ThemeProvider>
      <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ContextProvider>
</ThemeProvider>
  </StrictMode>
);
