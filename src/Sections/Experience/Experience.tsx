import React, { useEffect, useState } from "react";
import { BoxProps, Stack } from "@mui/material";
import AnimatedStack from "components/Slider/Stack3D/AnimatedStack";
import ViewInfo from "./partials/ExperienceInfo";
import SummaryCard from "./partials/SummaryCard";
import { fetchData } from "helpers/fetchData";
import { ExperienceType } from "helpers/types";
import PageTransition from "components/Animations/PageTransition";

export interface ExperienceProps extends BoxProps {}

const Experience: React.FC<ExperienceProps> = ({ ...props }) => {
  const [experience, setExperience] = useState<ExperienceType[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    fetchData("experience").then((data) =>
      setExperience(data as ExperienceType[])
    );
  }, []);

  return (
    <PageTransition>
      <Stack direction={{ xs: "column", md: "row" }} gap={{xs:2,md:5}}>
        <AnimatedStack
          index={index}
          setIndex={setIndex}
          count={experience.length - 1}
          style={{ flex: 1, width: "100%",overflow:'hidden' }}
        >
          {experience.map(
            (item, i: number) =>
              index === i && (
                <ViewInfo key={crypto.randomUUID()} info={item.info} />
              )
          )}
        </AnimatedStack>
        <SummaryCard
          data={experience}
          index={index}
          sx={{ minHeight: { xs: "fit-content", lg: 400 }, flex: 1 }}
        />
      </Stack>
    </PageTransition>
  );
};

export default Experience;
