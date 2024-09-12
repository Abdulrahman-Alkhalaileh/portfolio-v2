import React, { useEffect, useState } from "react";
import { BoxProps, Divider, Stack } from "@mui/material";
import AnimatedStack from "../../../../components/Slider/Stack3D/AnimatedStack";
import ViewInfo from "./partials/ExperienceInfo";
import { fetchData } from "../../../../helpers/fetchData";
import { ExperienceType } from "../../../../helpers/types";
import SummaryCard from "./partials/SummaryCard";

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
    <Stack spacing={1}>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        gap={{ xs: 5, md: 3 }}
      >
        <SummaryCard
          data={experience}
          index={index}
          sx={{ height: { xs: "fit-content", lg: 480 }, flex: 1 }}
        />
        <AnimatedStack
          index={index}
          setIndex={setIndex}
          count={experience.length - 1}
          style={{ flex: 1, width: "100%" }}
        >
          {experience.map(
            (item, i: number) =>
              index === i && (
                <ViewInfo key={crypto.randomUUID()} info={item.info} />
              )
          )}
        </AnimatedStack>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default Experience;
