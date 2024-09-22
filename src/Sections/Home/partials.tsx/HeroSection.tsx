import React from "react";
import { Box, Stack, StackProps } from "@mui/material";
import AnimatedPic from "components/Animations/AnimatedPic";
import H1 from "components/Typography/H1";
import P1 from "components/Typography/P1";

import { HighlightPhrases } from "utils/highlightText";
import ActionsSection from "./ActionsSection";
import ResumeButton from "./resume/ResumeButton";
import { UserInfoType } from "helpers/types";

export interface HeroSectionProps extends StackProps {
  userInfo: Partial<UserInfoType>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ userInfo, ...props }) => {
  const summary = HighlightPhrases(userInfo.summary || "");
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
      <Stack
        display={{ xs: "none", md: "flex" }}
        pb={{ xs: 4, md: 2 }}
        justifyContent="center"
      >
        <AnimatedPic imageUrl={userInfo.imageUrl || ""} />
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
              {userInfo.name}
            </H1>
          </Box>
          <Stack display={{ xs: "flex", md: "none" }} pb={4}>
            <AnimatedPic imageUrl={userInfo.imageUrl || ""} />
          </Stack>
          <P1
            fontWeight={500}
            maxWidth={1000}
            dangerouslySetInnerHTML={{ __html: summary }}
          ></P1>
        </Stack>
        <ResumeButton />
        <ActionsSection />
      </Stack>
    </Stack>
  );
};

export default HeroSection;
