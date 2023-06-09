import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
