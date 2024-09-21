import React, { useEffect, useState } from "react";
import PageTransition from "components/Animations/PageTransition";
import { Stack } from "@mui/material";
import P1 from "components/Typography/P1";
import { fetchData } from "helpers/fetchData";
import { SkillsType } from "helpers/types";
import H2 from "components/Typography/H2";
import Slider from "components/Slider/AutoScrollSlider";
import HeroSection from "./partials.tsx/HeroSection";

export interface HomeProps {}

const Home: React.FC<HomeProps> = ({ ...props }) => {
  const [skills, setSkills] = useState<SkillsType[]>([]);
  // const [projects, setProjects] = useState<ProjectType[]>([]);
  useEffect(() => {
    fetchData("technicalSkills").then((data) =>
      setSkills(data as SkillsType[])
    );
    // fetchData("projects").then((data) => setProjects(data as ProjectType[]));
  }, []);
  // console.log(projects);

  return (
    <PageTransition>
      <Stack spacing={5}>
        <HeroSection />
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
          <Slider items={skills} />
        </Stack>
      </Stack>
    </PageTransition>
  );
};

export default Home;
