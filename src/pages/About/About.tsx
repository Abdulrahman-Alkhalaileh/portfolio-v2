import React from "react";
import PageTransition from "components/Animations/PageTransition";
import { Stack } from "@mui/material";
import P1 from "components/Typography/P1";
import H2 from "components/Typography/H2";
import Slider from "components/Slider/AutoScrollSlider";
import HeroSection from "./partials/HeroSection";
import { useAppSelector } from "reduxConfigs/store";
import PageSuspense from "components/Suspense/PageSuspense";

const Home: React.FC = () => {
  const { technicalSkills, userInfo, loading } = useAppSelector(
    (state) => state.firestoreSlice
  );

  if (loading) return <PageSuspense flex={1} />;

  return (
    <PageTransition>
      <Stack spacing={5}>
        {userInfo && <HeroSection userInfo={userInfo} />}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent="space-around"
          alignItems="center"
          bgcolor="background.default"
          borderRadius={5}
          p={2}
        >
          <Stack>
            <P1 fontWeight={900}>I have</P1>
            <H2>Experience With</H2>
          </Stack>
          {technicalSkills && <Slider items={technicalSkills} />}
        </Stack>
      </Stack>
    </PageTransition>
  );
};

export default Home;
