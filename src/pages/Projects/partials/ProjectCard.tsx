import React, { useState } from "react";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, CardActions, Chip, Divider, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectModal from "./ProjectModal";
import { ProjectType } from "helpers/types";
import H2 from "components/Typography/H2";
import H1 from "components/Typography/H1";
import H4 from "components/Typography/H4";

export interface ProjectCardProps extends CardProps {
  data: ProjectType;
  type: "grid" | "slider";
}

const sliderStyle = {
  card: {
    width: { sm: 500, md: 800, lg: 1000, xl: 1200 },
    flexDirection: { xs: "column-reverse", md: "row" },
    flexGrow: { xs: 1, sm: 0 },
    cursor: "grabbing",
  },
  cardContent: {
    p: { xs: 1, md: 2 },
    gap: { xs: 0.5, md: 4 },
  },
  stack: {
    gap: { xs: 1, md: 3 },
  },
  chip: { fontSize: { xs: 14, md: 17, lg: 22 } },
  image: {
    height: { xs: 200, md: 400 },
    width: { xs: "100%", md: "50%" },
    m: { sm: 0, md: 2 },
    borderRadius: { xs: "20px 20px 0 0", md: "0 20px 20px 0" },
  },
};

const gridStyle = {
  card: { width: "auto", flexDirection: "column-reverse", flexGrow: 1 },
  cardContent: { p: 1, gap: 0.5 },
  stack: { gap: 1 },
  chip: { fontSize: 15 },
  image: { height: 200, width: "100%", m: 0, borderRadius: "20px 20px 0 0" },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ type, data, ...props }) => {
  const [openModal, setOpenModal] = useState(false);
  const style = type === "grid" ? gridStyle : sliderStyle;

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 1,
        transition: "all ease 0.5s",
        borderRadius: 5,
        ...style.card,
      }}
    >
      <CardContent
        sx={{
          pb: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          ...style.cardContent,
        }}
      >
        <Stack sx={{ ...style.stack }}>
          {type === "grid" ? (
            <H2 textAlign="center">{data.title}</H2>
          ) : (
            <H1 textAlign="center">{data.title}</H1>
          )}
        </Stack>
        <Stack gap={2} display={{ xs: "none", md: "flex" }}>
          <Divider />
          {type === "slider" && <H4>Some Technologies:</H4>}
          <Box display="flex" gap={1} flexWrap="wrap">
            {data.technologies.slice(0, 3).map((item) => (
              <Chip
                key={crypto.randomUUID()}
                label={item}
                sx={{ py: 2.3, ...style.chip }}
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
            sx={{ flex: 1, fontSize: { md: 20 } }}
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
      <Box
        sx={{
          boxSizing: "border-box",
          filter: "blur(3px)",
          border: 2,
          cursor: "pointer",
          transition: "0.5s all ease",
          "&:hover": {
            filter: "none",
            boxShadow: "none",
          },
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          bgcolor: "secondary.main",
          boxShadow: "#0000008b 0 0 0 1000px inset",
          ...style.image,
        }}
        onClick={() => setOpenModal(true)}
      />
    </Card>
  );
};

export default ProjectCard;
