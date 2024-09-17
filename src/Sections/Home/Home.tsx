import React, { useEffect, useState } from "react";
import H1 from "components/Typography/H1";
import PageTransition from "components/Animations/PageTransition";
import { Stack } from "@mui/material";
import P1 from "components/Typography/P1";
import { HighlightPhrases } from "utils/highlightText";
import { fetchData } from "helpers/fetchData";
import { SkillsType } from "helpers/types";
import H2 from "components/Typography/H2";
import Slider from "components/Slider/AutoScrollSlider";
import AnimatedPic from "components/Animations/AnimatedPic";

export interface HomeProps {}

const Home: React.FC<HomeProps> = ({ ...props }) => {
  const [skills, setSkills] = useState<SkillsType[]>([]);
  useEffect(() => {
    fetchData("technicalSkills").then((data) =>
      setSkills(data as SkillsType[])
    );
  }, []);

  const summary =
    HighlightPhrases(`A reliable Frontend engineer with with experience in ReactJS,
            NextJS, Material UI, and API integration. Skilled in building
            responsive, dynamic web applications and collaborating with backend
            teams. A fast autonomous learner with a strong focus on delivering
            clean, efficient code and enhancing user experience.`);

  return (
    <PageTransition>
      <Stack spacing={5}>
        <Stack
          spacing={6}
          direction={{ xs: "column", md: "row" }}
          bgcolor="background.default"
          alignItems="center"
          borderRadius={5}
          p={3}
        >
          <Stack display={{xs:'none',md:'flex'}} pb={4}>
              <AnimatedPic imageUrl="https://i.imgur.com/pN9xNoo.png" />
            </Stack>
          <Stack alignItems={{ xs: "center", lg: "start" }}>
            <P1 fontWeight={900} textAlign="center">
              Hi There, I'm
            </P1>
            <H1 gutterBottom textAlign="center">
              Abdulrahman Alkhalaileh
            </H1>
            <Stack display={{xs:'flex',md:'none'}} pb={4}>
              <AnimatedPic imageUrl="https://i.imgur.com/pN9xNoo.png" />
            </Stack>
            <P1
              fontWeight={900}
              maxWidth={1000}
              dangerouslySetInnerHTML={{ __html: summary }}
            ></P1>
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent="space-around"
          alignItems="center"
          bgcolor="background.default"
          borderRadius={5}
          p={2}
        >
          <H2>Experience With</H2>
          <Slider items={skills} />
        </Stack>
      </Stack>
    </PageTransition>
  );
};

export default Home;
