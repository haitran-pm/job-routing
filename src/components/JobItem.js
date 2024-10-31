import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AuthProvider from "../contexts/AuthProvider";

export function JobItem({ job: { id, title, skills, description } }) {
  const {
    state: { isLoggedIn },
  } = AuthProvider();

  return (
    <Grid size={{ lg: 4, md: 6, xs: 12 }} sx={{ display: "grid" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "10px",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ textAlign: "center" }}>
            {title}
          </Typography>
          <Divider variant="fullWidth" sx={{ mb: "10px" }} />
          <Stack
            useFlexGap
            direction="row"
            spacing={0.5}
            sx={{ mb: "10px", flexWrap: "wrap" }}
          >
            {skills.slice(0, 4).map((skill, index) => {
              return (
                <Chip
                  key={index}
                  size="small"
                  label={`${skill}`}
                  color="error"
                />
              );
            })}
          </Stack>
          <Typography variant="body2" sx={{ minHeight: "100px" }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            component={Link}
            to={isLoggedIn ? `/job/${id}` : `/login`}
            size="xs"
            color="warning"
            sx={{ margin: "auto", height: "24px" }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
