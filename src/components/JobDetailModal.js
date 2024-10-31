import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import LoadingScreen from "../components/LoadingScreen";
import { useNavigate, useParams } from "react-router-dom";
import { apiService } from "../app/apiServices";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "600px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export function JobDetailModal() {
  const params = useParams();
  const navigate = useNavigate();
  const jobId = params.id;
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(jobId);

  useEffect(() => {
    const getJob = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(`/${jobId}`);
        setJob(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getJob();
  }, [jobId]);

  console.log(job);

  const { title, description, skills, city } = job;

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Modal
          open={true}
          onClose={() => {
            navigate("/");
          }}
        >
          <Box sx={style}>
            <Typography gutterBottom variant="h4" sx={{ textAlign: "center" }}>
              {title}
            </Typography>
            <Divider variant="fullWidth" sx={{ mb: "10px" }} />
            <Typography
              variant="body1"
              sx={{ textAlign: "center", mb: "16px" }}
            >
              {description}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", mb: "4px" }}>
              Skills:
            </Typography>
            <Stack
              useFlexGap
              direction="row"
              spacing={0.5}
              sx={{ mb: "16px", flexWrap: "wrap" }}
              justifyContent="center"
            >
              {skills.map((skill, index) => {
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
            <Typography variant="body1" sx={{ textAlign: "center", mb: "4px" }}>
              City: {city}
            </Typography>
          </Box>
        </Modal>
      )}
    </>
  );
}
