import React, { useEffect } from "react";
import { Stack, StackProps } from "@mui/material";
import H2 from "components/Typography/H2";
import PageTransition from "components/Animations/PageTransition";
import DraggingList from "components/Lists/DraggingList";
import DraggableIndicator from "components/Animations/DraggableIndecator";
import { SKILLS_CONTENT } from "configs/constant";
import { useAppDispatch, useAppSelector } from "configs/redux/store";
import PageSuspense from "components/Suspense/PageSuspense";
import { fetchTechnicalSkills } from "configs/redux/slices/firestoreSlice";

export interface SkillsProps extends StackProps {}

const Skills: React.FC<SkillsProps> = ({ ...props }) => {
  const { personalSkills, technicalSkills, loading } = useAppSelector(
    (store) => store.firestoreSlice
  );
  const dispatcher = useAppDispatch();

  useEffect(() => {
    dispatcher(fetchTechnicalSkills({ order: "desc", field: "id" }));
  }, [dispatcher]);

  if (loading) return <PageSuspense flex={1} />;

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
              <img src={SKILLS_CONTENT.pic} alt="personal pic" />
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
