import React, { useState, useContext, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { JobItem } from "./JobItem";
import { PageContext } from "../layouts/MainLayout";
import { apiService } from "../app/apiServices";
import LoadingScreen from "../components/LoadingScreen";
import { JobPagination } from "./JobPagination";
import { JobDetailModal } from "./JobDetailModal";

export function JobList() {
  const { page } = useContext(PageContext);
  const limit = 5;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(`?_page=${page}&_limit=${limit}`);
        setJobs(res.data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getJobs();
  }, [page, limit]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <Grid
                  container
                  spacing={4}
                  maxWidth="lg"
                  sx={{ ml: "24px", mr: "24px" }}
                >
                  {jobs.map((job) => {
                    return <JobItem key={job.id} job={job} />;
                  })}
                </Grid>
              )}
            </>
          )}
        </Container>
      </Box>
      <JobPagination />
      <JobDetailModal />
    </>
  );
}
