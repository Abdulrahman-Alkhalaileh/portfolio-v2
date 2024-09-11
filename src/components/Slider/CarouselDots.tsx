import React from "react";
import { Box, BoxProps, SxProps } from "@mui/material";

export interface CarouselDotsProps extends BoxProps {
  count: number;
  activeStep: number;
  setActiveStep: (index: number) => void;
}

const circleStyle: SxProps = {
  width: { xs: "10px", md: "15px" },
  height: { xs: "10px", md: "15px" },
  borderRadius: "100%",
  cursor: "pointer",
  transition: "all ease 0.3s",
};

const CarouselDots: React.FC<CarouselDotsProps> = ({
  count,
  activeStep,
  setActiveStep,
  ...props
}) => {
  return (
    <Box display="flex" gap={1}>
      {Array(count)
        .fill(0)
        .map((item, index) => (
          <Box
            key={crypto.randomUUID()}
            {...props}
            sx={{ ...circleStyle, ...props.sx }}
            bgcolor={activeStep === index ? "primary.main" : "secondary.main"}
            onClick={() => setActiveStep(index)}
          ></Box>
        ))}
    </Box>
  );
};

export default CarouselDots;
