import React, { useEffect, useState } from "react";
import { Stack, StackProps } from "@mui/material";
import H2 from "components/Typography/H2";
import { SkillsType } from "helpers/types";
import { fetchData } from "helpers/fetchData";
import PageTransition from "components/Animations/PageTransition";
import DraggingList from "components/Lists/DraggingList";
import DraggableIndicator from "components/Animations/DraggableIndecator";
import { sortDataById } from "utils/sort";

export interface SkillsProps extends StackProps {}

const Skills: React.FC<SkillsProps> = ({ ...props }) => {
  const [personalSkills, setPersonalSkills] = useState<SkillsType[]>();
  const [technicalSkills, setTechnicalSkills] = useState<SkillsType[]>();

  useEffect(() => {
    fetchData("personalSkills").then((data) =>
      setPersonalSkills(data as SkillsType[])
    );
    fetchData("technicalSkills").then((data) => {
      const sortedData = sortDataById(data,'asc');
      setTechnicalSkills(sortedData as SkillsType[]);
    });
  }, []);

  return (
    <PageTransition>
      {technicalSkills && personalSkills && (
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
          gap={{ xs: 7, md: 3 }}
        >
          <Stack
            alignItems="center"
            gap={2}
            maxWidth="fit-content"
            position="relative"
          >
            <DraggableIndicator
              direction="vertical"
              sx={{
                position: "absolute",
                left: { xs: -30, sm: -40 },
                bottom: 10,
              }}
            />
            <H2 gutterBottom>Personal Skills:</H2>
            <DraggingList data={personalSkills} />
          </Stack>
          <Stack justifyContent="center" alignItems="center" gap={3}>
            <Stack
              borderRadius="50%"
              overflow="hidden"
              width={{ xs: 200, lg: 300 }}
              sx={{
                "&:hover": { borderRadius: 5, filter: "none" },
                transition: "all 0.5s",
                filter: "blur(2px)",
                boxShadow: "#fff 0px 0px 10px 5px",
              }}
            >
              <img src="https://i.imgur.com/ZduvM2w.jpeg" alt="personal pic" />
            </Stack>
          </Stack>
          <Stack
            alignItems="center"
            gap={2}
            maxWidth="fit-content"
            position="relative"
          >
            <DraggableIndicator
              direction="vertical"
              sx={{
                position: "absolute",
                left: { xs: -30, sm: -40 },
                bottom: 10,
              }}
            />
            <H2 gutterBottom>Technical Skills:</H2>
            <DraggingList data={technicalSkills} />
          </Stack>
        </Stack>
      )}
    </PageTransition>
  );
};

export default Skills;
