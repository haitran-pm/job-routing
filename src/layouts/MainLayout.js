import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "../components/Header";
import { JobList } from "../components/JobList";

export const PageContext = createContext();

function MainLayout() {
  const [page, setPage] = useState(1);
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <CssBaseline />
      {/* <Header /> */}
      {/* <JobList /> */}
      <Outlet />
    </PageContext.Provider>
  );
}

export default MainLayout;
