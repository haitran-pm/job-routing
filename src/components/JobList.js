import React, { useContext } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { JobItem } from "./JobItem";
import jobs from "../data/jobs.json";
import { PageContext } from "../App";

export function JobList() {
  const { page } = useContext(PageContext);
  const pageSize = 5;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid
          container
          spacing={4}
          maxWidth="lg"
          sx={{ ml: "24px", mr: "24px" }}
        >
          {jobs.slice((page - 1) * pageSize, page * pageSize).map((job) => {
            return <JobItem key={job.id} job={job} />;
          })}
        </Grid>
      </Container>
    </Box>
  );
}
