import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

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
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value="search"
          onChange={(e) => setSearch(e.target.value.toLowerCase)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            width: {
              lg: "180px",
              xs: "80px",
            },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={() => console.log(search)}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
