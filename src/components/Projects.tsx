import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Import the Firestore instance

const Projects = () => {
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map((doc) => doc.data());
      setProjects(projectList);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      {projects.map((project: any, index: any) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.url}>View Project</a>
          <img src={project.imageUrl} alt="hi" width={500} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
