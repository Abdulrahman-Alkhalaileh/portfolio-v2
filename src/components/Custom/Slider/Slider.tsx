import React from "react";
import CarouselDots from "./CarouselDots";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, IconButton } from "@mui/material";

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  count: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  children,
  count,
  currentIndex,
  setCurrentIndex,
  ...props
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-around">
      <IconButton
        onClick={() =>
          setCurrentIndex(currentIndex !== 0 ? currentIndex - 1 : count - 1)
        }
      >
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>
      <Box
        minHeight={500}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2.5}
      >
        <Box display="flex" gap={2.5}>
          {children}
        </Box>
        <CarouselDots
          count={count}
          activeStep={currentIndex}
          setActiveStep={setCurrentIndex}
        />
      </Box>
      <IconButton
        onClick={() =>
          setCurrentIndex(currentIndex !== count - 1 ? currentIndex + 1 : 0)
        }
      >
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Slider;
