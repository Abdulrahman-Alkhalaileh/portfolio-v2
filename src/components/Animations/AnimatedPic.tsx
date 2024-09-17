import React, { useState } from "react";
import { Box, SxProps, useTheme } from "@mui/material";

export interface AnimatedPicProps {
  sx?: SxProps; // I wanted to specify the width and height, but it should be in sx for responsive
  imageUrl: string;
}

const AnimatedPic: React.FC<AnimatedPicProps> = ({ imageUrl, sx }) => {
  const theme = useTheme();

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Box
      border={5}
      borderRadius={5}
      borderColor="primary.main"
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width="fit-content"
      height="fit-content"
      left={hover ? 0 : -5}
      sx={{ transition: "all ease 0.5s" }}
    >
      <Box
        position="absolute"
        top={{ xs: 5, sm: 10 }}
        left={{ xs: 5, sm: 10 }}
        height="100%"
        width="100%"
        border={5}
        borderRadius={5}
        borderColor="text.primary"
        sx={{
          transition: "all ease 0.5s",
          ...(hover && { top: -5, left: -5 }), // Apply the hover effect based on state
        }}
      ></Box>

      <Box
        sx={{
          width: { xs: 200, sm: 300, lg: 400 },
          height: { xs: 300, sm: 400, lg: 500 },
          backgroundImage: `url(${imageUrl})`,
          boxSizing: "border-box",
          transition: "0.5s all ease",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "drop-shadow(#000000 0px 5px 10px)",
          ...(hover && {
            filter: `drop-shadow(${theme.palette.primary.main} 15px 0px 0px)`,
          }),
          ...sx,
        }}
      ></Box>
    </Box>
  );
};

export default AnimatedPic;
