import React, { useState } from "react";
import { BoxProps, Stack } from "@mui/material";
import AnimatedStack from "components/Slider/Stack3D/AnimatedStack";
import ViewInfo from "./partials/ExperienceInfo";
import SummaryCard from "./partials/SummaryCard";
import PageTransition from "components/Animations/PageTransition";
import DraggableIndicator from "components/Animations/DraggableIndecator";
import { useAppSelector } from "configs/redux/store";
import PageSuspense from "components/Suspense/PageSuspense";

export interface ExperienceProps extends BoxProps {}

const Experience: React.FC<ExperienceProps> = ({ ...props }) => {
  const { experience, loading } = useAppSelector(
    (store) => store.firestoreSlice
  );
  const [index, setIndex] = useState<number>(0);

  if (loading) return <PageSuspense flex={1} />;

  return (
    <PageTransition>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 2, md: 5 }}
        pt={{ xs: 1, sm: 0 }}
        position="relative"
      >
        <DraggableIndicator
          direction="horizontal"
          sx={{
            position: "absolute",
            top: { xs: "-30px", md: "-50px" },
            left: { xs: "calc(50% - 55px)", sm: "20px" },
          }}
        />
        {experience && (
          <>
            <AnimatedStack
              index={index}
              setIndex={setIndex}
              count={experience.length - 1}
              style={{ flex: 1, width: "100%", overflow: "hidden" }}
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
          </>
        )}
      </Stack>
    </PageTransition>
  );
};

export default Experience;
