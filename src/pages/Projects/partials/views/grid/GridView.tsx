import React, { useState } from "react";
import { Grid2, Grid2Props } from "@mui/material";
import { ProjectType } from "helpers/types";
import ProjectCard from "../../ProjectCard";
import CustomPagination from "components/Custom/CustomPagination";

export interface GridViewProps extends Grid2Props {
  projects: ProjectType[];
}

const projectsPerPage = 4;

const GridView: React.FC<GridViewProps> = ({ projects, ...props }) => {
  const [paginatedProjects, setPaginatedProjects] = useState<ProjectType[]>(
    projects.slice(0, projectsPerPage)
  );

  return (
    <>
      <Grid2 container columnSpacing={4} rowGap={4} {...props}>
        {paginatedProjects.map((project) => (
          <Grid2 size={{ xs: 12, sm: 6, xl: 3 }} key={crypto.randomUUID()}>
            <ProjectCard data={project} type="grid" />
          </Grid2>
        ))}
      </Grid2>
      <CustomPagination
        dataPerPage={projectsPerPage}
        data={projects}
        setData={setPaginatedProjects}
      />
    </>
  );
};

export default GridView;
