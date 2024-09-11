import { useState, useEffect } from "react";
import Slider from "../../../../components/Slider/Slider";
import ProjectCard from "../../../../components/Custom/ProjectCard";
import ThemeSwitch from "../../../../components/Custom/ThemeSwitch";
import { Box } from "@mui/material";
import { fetchData} from "../../../../helpers/fetchData";
import { ProjectType } from "../../../../helpers/types";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  useEffect(() => {
    fetchData("projects").then((data) => setProjects(data as ProjectType[]));
  }, []);

  return (
    <Box >
      <ThemeSwitch />
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
    </Box>
  );
};

export default Projects;
