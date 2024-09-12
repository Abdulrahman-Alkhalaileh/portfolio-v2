import { Stack, StackProps, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SkillsType } from "../../../../helpers/types";
import { fetchData } from "../../../../helpers/fetchData";
import DraggingList from "../../../../components/Lists/ScrollableList/DraggingList";
import H2 from "../../../../components/Typography/H2";

export interface SkillsProps extends StackProps {}

const Skills: React.FC<SkillsProps> = ({ ...props }) => {
  const [skills, setSkills] = useState<SkillsType>();

  useEffect(() => {
    fetchData("skills").then((data) => setSkills(data[0] as SkillsType));
  }, []);

  return (
    <>
      {skills && (
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
          gap={{xs:7,md:3}}
        >
          <Stack alignItems="center" gap={2} maxWidth="fit-content">
            <H2 gutterBottom>
              Personal Skills:
            </H2>
            <DraggingList data={skills.personal} />
          </Stack>
          <Stack justifyContent='center' alignItems='center' gap={3}>
            <Stack
              borderRadius="50%"
              overflow="hidden"
              width={{xs:200,lg:300}}
              sx={{
                "&:hover": { borderRadius: 5, filter: "none" },
                transition: "all 0.5s",
                filter: "blur(2px)",
                boxShadow: '#fff 0px 0px 10px 5px'
              }}
            >
              <img
                src="https://i.imgur.com/ZduvM2w.jpeg"
                alt="personal pic"
              />
            </Stack>
              <Typography variant="body1" textAlign='center' fontWeight={600} color="text.secondary" >Drag up and down lists to review skills</Typography>
          </Stack>
          <Stack alignItems="center" gap={2} maxWidth="fit-content">
            <H2 gutterBottom>
              Technical Skills:
            </H2>
            <DraggingList data={skills.technical} />
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Skills;
