import React from "react";
import { Box, Button, IconButton, Stack, StackProps } from "@mui/material";
import { HOME_CONTENT } from "configs/constant";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export interface ActionsSectionProps extends StackProps {}

const ActionsSection: React.FC<ActionsSectionProps> = ({ ...props }) => {
  return (
    <Stack
      boxSizing="border-box"
      pt={2}
      borderTop={2}
      borderColor="text.secondary"
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "stretch", sm: "center" }}
      width="100%"
      color="text.primary"
      spacing={{ xs: 2, sm: 0 }}
      {...props}
    >
      <Box
        display="flex"
        justifyContent="center"
        borderRadius={3}
        bgcolor={{ xs: "backgroundColor.main", sm: "transparent" }}
      >
        <IconButton color="inherit" href={`mailto:${HOME_CONTENT.email}`}>
          <EmailIcon
            sx={{
              width: { xs: 30, sm: 35, lg: 40 },
              height: { xs: 30, sm: 35, lg: 40 },
            }}
          />
        </IconButton>
        <IconButton color="inherit" href={HOME_CONTENT.github}>
          <GitHubIcon
            sx={{
              width: { xs: 30, sm: 35, lg: 40 },
              height: { xs: 30, sm: 35, lg: 40 },
            }}
          />
        </IconButton>
        <IconButton color="inherit" href={HOME_CONTENT.linkedId}>
          <LinkedInIcon
            sx={{
              width: { xs: 30, sm: 35, lg: 40 },
              height: { xs: 30, sm: 35, lg: 40 },
            }}
          />
        </IconButton>
      </Box>
      <Box
        display="flex"
        gap={2}
        justifyContent="space-around"
        alignItems="center"
        color="text.primary"
      >
        <Button
          variant="contained"
          color="secondary"
          href={HOME_CONTENT.linkedId}
          fullWidth
          sx={{
            border: 2,
            minWidth: { xs: 100, sm: 120 },
            fontSize: { xs: 16, sm: 20 },
            color: "text.primary",
            flex: 1,
          }}
        >
          Hire Me
        </Button>
        <Button
          fullWidth
          variant="contained"
          href={`mailto:${HOME_CONTENT.email}`}
          color="secondary"
          sx={{
            border: 2,
            minWidth: { xs: 100, sm: 120 },
            fontSize: { xs: 16, sm: 20 },
            color: "text.primary",
            flex: 1,
          }}
        >
          Get In Touch
        </Button>
      </Box>
    </Stack>
  );
};

export default ActionsSection;
