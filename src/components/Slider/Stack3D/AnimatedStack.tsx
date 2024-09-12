import React, { HTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./AnimatedCard";
import { Box } from "@mui/material";
import ProgressBar from "./ProgressBar";

export interface AnimatedStackProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
  setIndex: (value: number) => void;
  count: number;
}

const AnimatedStack: React.FC<AnimatedStackProps> = ({
  index,
  setIndex,
  count,
  children,
  ...props
}) => {
  return (
    <motion.div
      style={{
        minHeight: 350,
        position: "relative",
        ...props.style,
      }}
    >
      <ProgressBar index={index} count={count + 1} />
      <AnimatePresence initial={false}>
        <Card
          key={index + 1}
          frontCard={false}
          index={0}
          setIndex={() => {}}
          drag="x"
          count={count}
        >
          <Box sx={{ opacity: 0 }}>{children}</Box>
        </Card>
        <Card
          key={index}
          frontCard={true}
          index={index}
          setIndex={setIndex}
          drag="x"
          count={count}
        >
          {children}
        </Card>
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedStack;
