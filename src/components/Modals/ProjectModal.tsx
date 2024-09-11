import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Chip,
  Dialog,
  DialogContent,
  DialogProps,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ProjectType } from "../Custom/ProjectCard";

export interface ProjectModalProps extends DialogProps {
  title: string;
  handleClose: () => void;
  data: ProjectType;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  handleClose,
  title,
  data,
  ...props
}) => {
  return (
    <>
      <Dialog maxWidth="md" {...props} onClose={handleClose} PaperProps={{sx:{boxShadow:'#000000d3 0px 0px 900px 900px'}}}>
        <Stack direction="row" justifyContent="end" p={1}>
          <IconButton onClick={handleClose} disableRipple>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider />
        <DialogContent
          sx={{
            p: 2,
            pt: 0,
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 1,
          }}
        >
          <Stack
            sx={{
              pb: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Stack gap={3}>
              <Typography
                variant="h1"
                fontSize={{ xs: "2.5rem", md: "4.5rem" }}
                fontWeight={700}
              >
                {data.title}
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                fontSize={20}
                fontWeight={600}
                color="text.secondary"
                gutterBottom
              >
                {data.description}
              </Typography>
            </Stack>
            <Stack gap={2}>
              <Divider variant="fullWidth" />
              <Typography variant="h4" fontWeight={600} color="#3d91ff">
                Technologies:
              </Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {data.technologies.map((item) => (
                  <Chip
                    key={crypto.randomUUID()}
                    label={item}
                    sx={{ fontSize: 22 }}
                  />
                ))}
              </Box>
              <Box display="flex" justifyContent="center"></Box>
            </Stack>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack spacing={2} pt={{xs:0,lg:2}} alignItems="center" justifyContent="space-between">
            <Stack direction="row" gap={2} width="100%">
              <Button
                variant="contained"
                disabled={!!!data.url}
                sx={{ flex: 1 }}
              >
                <a href={data.url} target="__blank">
                  Live Demo
                </a>
              </Button>
              <a href={data.repo} target="__blank">
                <GitHubIcon fontSize="large" />
              </a>
            </Stack>
            <CardMedia
              image={data.imageUrl}
              sx={{ width: { xs: "100%", lg: 400 }, objectFit: "fill" }}
              style={{
                objectFit: "fill",
                height: 400,
              }}
            />
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectModal;
