import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layouts/MainLayout";
import AuthContext from "./contexts/AuthContext";

function App() {
  const auth = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {auth.state.isLoggedIn ? (
          <Route path="/job/:id" element={<DetailPage />} />
        ) : (
          <Route path="/job/:id" element={<LoginPage />} />
        )}
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
