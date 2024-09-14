import React from "react";
import H1 from "components/Typography/H1";
import PageTransition from "components/Animations/PageTransition";
import { Box, CircularProgress } from "@mui/material";

export interface HomeProps {}

const Home: React.FC<HomeProps> = ({ ...props }) => {
  return (
    <PageTransition>
      <H1 textAlign="center">Abdulrahman Alkhalaileh</H1>
      <H1 textAlign="center" gutterBottom>Still In Progress...</H1>
      <Box textAlign="center">
        <CircularProgress size={70} />
      </Box>
    </PageTransition>
  );
};

export default Home;
