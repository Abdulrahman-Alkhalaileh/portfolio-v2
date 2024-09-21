import { useState, useEffect } from "react";
import Slider from "components/Slider/Slider";
import { fetchData } from "helpers/fetchData";
import { ProjectType } from "helpers/types";
import PageTransition from "components/Animations/PageTransition";
import ProjectCard from "./partials/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  useEffect(() => {
    fetchData({collectionName:"projects"}).then((data) => setProjects(data as ProjectType[]));
  }, []);

  return (
    <PageTransition>
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
    </PageTransition>
  );
};

export default Projects;
