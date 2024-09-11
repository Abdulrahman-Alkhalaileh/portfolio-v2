import React, { useEffect, useState } from "react";
import { Box, BoxProps } from "@mui/material";
import AnimatedStack from "../../../../components/Slider/Stack3D/AnimatedStack";
import ViewInfo from "./partials/ViewInfo";
import { fetchData } from "../../../../helpers/fetchData";
import { ExperienceType } from "../../../../helpers/types";
import ProgressBar from "../../../../components/Slider/Stack3D/ProgressBar";

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
    <Box height={{ xs: 400, lg: 550 }} p={1}>
      <ProgressBar index={index} count={experience.length}/>
      <AnimatedStack
        index={index}
        setIndex={setIndex}
        count={experience.length - 1}
      >
        {experience.map(
          (item, i: number) =>
            index === i && (
              <ViewInfo key={crypto.randomUUID()} info={item.info} />
            )
        )}
      </AnimatedStack>
    </Box>
  );
};

export default Experience;
