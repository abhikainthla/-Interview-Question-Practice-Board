import { Box, Typography, LinearProgress } from "@mui/material";

const ProgressBar = ({ completed, total }) => {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography variant="body1" fontWeight="bold">
          Progress
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {completed}/{total} ({percentage}%)
        </Typography>
      </Box>


      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          height: 10,
          borderRadius: 5,
        }}
      />
    </Box>
  );
};

export default ProgressBar;
