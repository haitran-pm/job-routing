import React, { useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Router from "./routes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ThemeProvider from "./contexts/ThemeProvider";
import AuthProvider from "./contexts/AuthProvider";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/job/:id" element={<DetailPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route index element={<LoginPage />} />
      </Route>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
