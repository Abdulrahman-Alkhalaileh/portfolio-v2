import React, { useState } from "react";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions, Chip, Divider, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectModal from "../Modals/ProjectModal";

export interface ProjectType {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  repo: string;
  technologies: string[];
}

export interface ProjectCardProps extends CardProps {
  data: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, ...props }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Card
      sx={{
        width: { xs: 230,sm:500, md: 800, lg: 1000, xl: 1200 },
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "space-between",
        gap: 1,
        transition: 'all ease 0.5s',
      }}
    >
      <CardContent
        sx={{
          p: 2,
          pb: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 4,
          flex: 1,
        }}
      >
        <Stack gap={{ xs: 1, md: 3 }}>
          <Typography
            variant="h1"
            fontSize={{ xs:"1.5rem",sm: "2.5rem", lg: "4.5rem" }}
            fontWeight={700}
          >
            {data.title}
          </Typography>
        </Stack>
        <Stack gap={2} display={{ xs: "none", md: "flex" }}>
          <Divider />
          <Typography
            variant="h4"
            fontWeight={600}
            fontSize={{ xs: "1.5rem",md:'1.8rem', lg: "2rem" }}
          >
            Some Technologies:
          </Typography>
          <Box display="flex" gap={1} flexWrap="wrap">
            {data.technologies.slice(0, 3).map((item) => (
              <Chip
                key={crypto.randomUUID()}
                label={item}
                sx={{ fontSize: { xs: 14,md:17, lg: 22 } }}
              />
            ))}
          </Box>
        </Stack>
          <Divider />
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <a href={data.repo} target="__blank">
            <GitHubIcon fontSize="large" />
          </a>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModal(true)}
            sx={{ flex: 1,fontSize: {xs:14,md:20} }}
          >
            View More
          </Button>
          <ProjectModal
            open={openModal}
            title={data.title}
            handleClose={() => setOpenModal(false)}
            data={data}
          />
        </CardActions>
      </CardContent>
      <CardMedia
        component="img"
        sx={{
          height: { xs: 200, md: 400 },
          objectFit: "fill",
          width: { xs: "100%", md: "50%" },
          filter: "blur(3px)",
        }}
        image={data.imageUrl}
        alt={data.title}
      />
    </Card>
  );
};

export default ProjectCard;
