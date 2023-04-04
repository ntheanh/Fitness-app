import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/meterial";

const App = () => {
  return (
    <Box>
      <Routes with="400px">
        <Navbar />
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
    </Box>
  );
};

export default App;
