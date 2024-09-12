import React, { useState } from "react";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, CardActions, Chip, Divider, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectModal from "../Modals/ProjectModal";
import { ProjectType } from "../../helpers/types";
import H4 from "../Typography/H4";
import H1 from "../Typography/H1";

export interface ProjectCardProps extends CardProps {
  data: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, ...props }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Card
      sx={{
        width: { sm: 500, md: 800, lg: 1000, xl: 1200 },
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "space-between",
        gap: 1,
        transition: "all ease 0.5s",
        borderRadius: 5,
        flexGrow: { xs: 1, sm: 0 },
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
          <H1 textAlign="center">{data.title}</H1>
        </Stack>
        <Stack gap={2} display={{ xs: "none", md: "flex" }}>
          <Divider />
          <H4>Some Technologies:</H4>
          <Box display="flex" gap={1} flexWrap="wrap">
            {data.technologies.slice(0, 3).map((item) => (
              <Chip
                key={crypto.randomUUID()}
                label={item}
                sx={{ fontSize: { xs: 14, md: 17, lg: 22 }, py: 2.3 }}
              />
            ))}
          </Box>
        </Stack>
        <Divider />
        <CardActions
          sx={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <a href={data.repo} target="__blank">
            <GitHubIcon fontSize="large" />
          </a>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModal(true)}
            sx={{ flex: 1, fontSize: { xs: 14, md: 20 } }}
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
