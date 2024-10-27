import React, { useState, createContext } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "./components/Header";
import { JobList } from "./components/JobList";
import { JobPagination } from "./components/JobPagination";

export const PageContext = createContext();

function App() {
  const [page, setPage] = useState(1);
  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <PageContext.Provider value={{ page, setPage }}>
        <CssBaseline />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <JobList />
        <JobPagination />
      </PageContext.Provider>
    </ThemeProvider>
  );
}

export default App;
