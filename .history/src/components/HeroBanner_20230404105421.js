import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <Typography>Fitness Club</Typography>
      <Typography>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography>Check out the most effective exercises</Typography>
    </Box>
  );
};

export default HeroBanner;
