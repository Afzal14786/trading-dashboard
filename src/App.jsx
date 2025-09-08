import React from "react";
import { useLocation } from "react-router-dom";
import NeftyFiftyBar from "./Components/NeftyFiftyBar";
import Dashboard from "./Components/Dashboard";
import { GeneralContextProvider } from "./Components/GeneralContext";
function App() {
  const location = useLocation();

  // Check if the current path is the login page.
  const isLoginPage = location.pathname === "/login" || location.pathname === "/reset";

  return (
    <>
      {/* The header is now conditional. It will only render if the user is NOT on the login page. */}
      <GeneralContextProvider>
        {!isLoginPage && <NeftyFiftyBar />}
        <Dashboard />
      </GeneralContextProvider>
    </>
  );
}

export default App;
