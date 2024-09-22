import { useState } from "react";
import Slider from "components/Slider/Slider";
import PageTransition from "components/Animations/PageTransition";
import ProjectCard from "./partials/ProjectCard";
import { useAppSelector } from "configs/redux/store";
import PageSuspense from "components/Suspense/PageSuspense";

const Projects = () => {
  const { projects, loading } = useAppSelector((store) => store.firestoreSlice);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  if (loading) return <PageSuspense flex={1} />;

  return (
    <PageTransition>
      {projects && (
        <Slider
          count={projects.length}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        >
          {projects.map(
            (project: any, index: any) =>
              currentIndex === index && (
                <ProjectCard key={crypto.randomUUID()} data={project} />
              )
          )}
        </Slider>
      )}
    </PageTransition>
  );
};

export default Projects;
