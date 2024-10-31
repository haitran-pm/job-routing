import * as React from "react";
import { Routes, Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/NotFoundPage";

function Router() {
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

export default Router;
