import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PageContext } from "../App";

export function JobPagination() {
  const { page, setPage } = useContext(PageContext);

  return (
    <Stack spacing={2} alignItems="center" sx={{ mt: 4, mb: 4 }}>
      <Pagination
        page={page}
        count={3}
        color="error"
        onChange={(event, page) => setPage(page)}
      />
    </Stack>
  );
}
