import React from "react";
import H1 from "components/Typography/H1";
import PageTransition from "components/Animations/PageTransition";
import { Box, CircularProgress, Stack } from "@mui/material";

export interface HomeProps {}

const Home: React.FC<HomeProps> = ({ ...props }) => {
  return (
    <PageTransition>
      <H1 textAlign="center">Abdulrahman Alkhalaileh</H1>
      <H1 textAlign="center" gutterBottom>Still In Progress...</H1>
      <Box textAlign="center">
        <CircularProgress size={70} />
        <Stack justifyContent='center' direction='row' gap={3}>
          <img src="https://mui.com/static/logo.png" width={50} height={50} alt="logo"/>
          <img src="https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png" width={50} height={50} alt="logo"/>
          <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" width={50} height={50} alt="logo"/>
          <img src="https://cdn-icons-png.flaticon.com/256/174/174854.png" width={50} height={50} alt="logo"/>
        </Stack>
      </Box>
    </PageTransition>
  );
};

export default Home;
