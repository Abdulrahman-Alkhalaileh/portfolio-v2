import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Chip,
  DialogProps,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CustomModal from "../../../components/Popups/CustomModal";
import { ProjectType } from "helpers/types";
import H1 from "components/Typography/H1";
import P1 from "components/Typography/P1";

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
      <CustomModal handleClose={handleClose} {...props}>
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
            <H1>{data.title}</H1>
            <Divider />
            <P1 gutterBottom>{data.description}</P1>
          </Stack>
          <Stack gap={2}>
            <Divider variant="fullWidth" />
            <Typography variant="h4" fontWeight={600} color="primary">
              Technologies:
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              {data.technologies.map((item) => (
                <Chip
                  key={crypto.randomUUID()}
                  label={item}
                  sx={{ fontSize: 22, py: 2.3 }}
                />
              ))}
            </Box>
            <Box display="flex" justifyContent="center"></Box>
          </Stack>
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack
          spacing={2}
          pt={{ xs: 0, lg: 2 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" gap={2} width="100%" alignItems="center">
            <a href={data.url} target="__blank" style={{ width: "100%" }}>
              <Button variant="contained" disabled={!!!data.url} fullWidth>
                Live Demo
              </Button>
            </a>
            <a href={data.repo} target="__blank">
              <GitHubIcon fontSize="large" />
            </a>
          </Stack>
          <CardMedia
            sx={{
              width: { xs: "100%", lg: 400 },
              height: { xs: 250, sm: 400 },
              backgroundImage: `url(${data.imageUrl})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              border: 2,
              borderRadius: 3,
              bgcolor:'secondary.main'
            }}
          />
        </Stack>
      </CustomModal>
    </>
  );
};

export default ProjectModal;
