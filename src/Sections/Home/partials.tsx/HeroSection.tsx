import React from "react";
import { Box, Button, Stack, StackProps } from "@mui/material";
import AnimatedPic from "components/Animations/AnimatedPic";
import H1 from "components/Typography/H1";
import P1 from "components/Typography/P1";
import { HOME_CONTENT } from "configs/constant";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { HighlightPhrases } from "utils/highlightText";
import ActionsSection from "./ActionsSection";

export interface HeroSectionProps extends StackProps {}

const HeroSection: React.FC<HeroSectionProps> = ({ ...props }) => {
  const summary = HighlightPhrases(HOME_CONTENT.summary);
  return (
    <Stack
      spacing={{ xs: 0, md: 6 }}
      direction={{ xs: "column", md: "row" }}
      bgcolor="background.default"
      alignItems="stretch"
      borderRadius={5}
      p={3}
      {...props}
    >
      <Stack display={{ xs: "none", md: "flex" }} pb={{ xs: 4, md: 2 }} justifyContent='center'>
        <AnimatedPic imageUrl={HOME_CONTENT.pic} />
      </Stack>
      <Stack
        justifyContent="space-between"
        gap={3}
        position="relative"
        color="text.primary"
      >
        <Stack
          alignItems={{ xs: "center", md: "start" }}
          flex={1}
          justifyContent="center"
          p={{ md: 3 }}
          gap={{ md: 4 }}
        >
          <Box>
            <P1 fontWeight={900} textAlign={{ xs: "center", sm: "start" }}>
              Hi There, I'm
            </P1>
            <H1 gutterBottom textAlign="center">
              Abdulrahman Alkhalaileh
            </H1>
          </Box>
          <Stack display={{ xs: "flex", md: "none" }} pb={4}>
            <AnimatedPic imageUrl={HOME_CONTENT.pic} />
          </Stack>
          <P1
            fontWeight={500}
            maxWidth={1000}
            dangerouslySetInnerHTML={{ __html: summary }}
          ></P1>
        </Stack>
        <Button
          variant="contained"
          color="secondary"
          href={HOME_CONTENT.resume}
          download="My_Resume.pdf"
          fullWidth
          sx={{
            border: 2,
            minWidth: { xs: 100, sm: 120 },
            fontSize: { xs: 16, sm: 20 },
            display: "flex",
            gap: 1,
            color: "text.primary",
            alignItems: "center",
          }}
        >
          Resume <CloudDownloadIcon />
        </Button>
        <ActionsSection />
      </Stack>
    </Stack>
  );
};

export default HeroSection;
