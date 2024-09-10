import React from "react";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Chip, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export interface ProjectCardProps extends CardProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  repo: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, ...props }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: 'start',
        width: { xs: 300,sm:400,md:600, lg: 1000, xl:1200 },
        height: { xs: "fit-content", lg: 500 },
      }}
    >
      <CardContent
        sx={{
          p:2,
          pb:4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 4,
          width: {xs:'fit-content',lg:'50%'},
        }}
      >
        <Stack gap={3}>
          <Typography variant="h1" fontSize={{xs:'2.5rem',md:'4.5rem'}} fontWeight={700}>
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            fontSize={20}
            color="text.secondary"
            gutterBottom
          >
            {props.description}
          </Typography>
        </Stack>
        <Stack gap={2}>
          <Typography variant="h4" fontWeight={600} color="#0c5dcc">
            Technologies:
          </Typography>
          <Box display="flex" gap={1} flexWrap="wrap">
            {props.technologies.map((item) => (
              <Chip
                key={crypto.randomUUID()}
                label={item}
                sx={{ fontSize: 22 }}
              />
            ))}
          </Box>
        </Stack>
        <Box display='flex' justifyContent='center'><a href={props.repo} target="__blank"><GitHubIcon fontSize="large"/></a></Box>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: { xs: "100%", lg: "50%" }, }}
        image={imageUrl}
        alt={props.title}
      />
    </Card>
  );
};

export default ProjectCard;
