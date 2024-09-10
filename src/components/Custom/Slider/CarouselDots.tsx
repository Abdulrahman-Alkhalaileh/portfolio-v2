import React from "react";
import { Box, BoxProps, SxProps } from "@mui/material";

export interface CarouselDotsProps extends BoxProps {
  count: number;
  activeStep: number;
  setActiveStep: (index: number) => void;
}

const circleStyle: SxProps = {
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  cursor: "pointer",
};

const CarouselDots: React.FC<CarouselDotsProps> = ({
  count,
  activeStep,
  setActiveStep,
  ...props
}) => {
  return (
    <div style={{ display: "flex", gap: 15 }}>
      {Array(count)
        .fill(0)
        .map((item, index) => (
          <Box
            {...props}
            sx={{ ...circleStyle, ...props.sx }}
            bgcolor={activeStep === index ? "primary.main" : "secondary.main"}
            onClick={() => setActiveStep(index)}
          ></Box>
        ))}
    </div>
  );
};

export default CarouselDots;
