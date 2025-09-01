import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Routes>
        <Route element={<App />} path="/*" />
      </Routes>
    </Router>
    <ToastContainer position="top-right"/>
  </>
);
