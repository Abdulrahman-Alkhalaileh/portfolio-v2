import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../configs/firebase"; // Import the Firestore instance
import Slider from "./Slider/Slider";
import ProjectCard from "./Custom/ProjectCard";
import ThemeSwitch from "./Custom/ThemeSwitch";
import { Box } from "@mui/material";

const Projects = () => {
  const [projects, setProjects] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map((doc) => doc.data());
      setProjects(projectList);
    };
    fetchProjects();
  }, []);

  return (
    <Box mx={{ xs: 0, lg: 3, xl: 7 }}>
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
