import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ServiceContextProvider from "./context/ServiceContext.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AuthContextProvider>
    <ServiceContextProvider>
      <App />
    </ServiceContextProvider>
  </AuthContextProvider>
</BrowserRouter>
);
