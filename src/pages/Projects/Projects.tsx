import React from "react";
import PageTransition from "components/Animations/PageTransition";
import { useAppSelector } from "configs/redux/store";
import PageSuspense from "components/Suspense/PageSuspense";
import SliderView from "./partials/views/slider/SliderView";
import { useSearchParams } from "react-router-dom";
import GridView from "./partials/views/grid/GridView";
import { Stack } from "@mui/material";
import ViewHandler from "./partials/ViewHandler";

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const { projects, loading } = useAppSelector((store) => store.firestoreSlice);
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");

  if (loading) return <PageSuspense flex={1} />;

  return (
    <PageTransition>
      {projects && (
        <>
          <Stack
            direction="row"
            justifyContent="flex-end"
            mt={{ xs: -3, md: -8 }}
            mb={2}
          >
            <ViewHandler />
          </Stack>
          {!view || view === "slider" ? (
            <SliderView projects={projects} />
          ) : (
            <GridView projects={projects} />
          )}
        </>
      )}
    </PageTransition>
  );
};

export default Projects;
