import React, { HTMLAttributes } from "react";
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Paper } from "@mui/material";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  frontCard: boolean;
  index: number;
  setIndex: (value: number) => void;
  drag: "x" | "y";
  count: number;
}

const Card: React.FC<CardProps> = ({
  frontCard,
  index,
  setIndex,
  drag,
  count,
  children,
  ...props
}) => {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom: any) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };
  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 90, opacity: 0.5 },
  };

  function handleDragEnd(_: any, info: any) {
    if (info.offset.x < -100) {
      setExitX(-250);
      setIndex(index < count ? index + 1 : 0);
    }
    if (info.offset.x > 100) {
      setExitX(250);
      setIndex(index < count ? index + 1 : 0);
    }
  }

  return (
    <motion.div
      style={{
        minWidth: 200,
        minHeight: 350,
        position: "absolute",
        top: 0,
        x,
        rotate,
        cursor: "grab",
        ...props.style,
      }}
      whileTap={{ cursor: "grabbing" }}
      // Dragging
      drag={drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      // Animation
      variants={frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div
        style={{
          scale,
        }}
      >
        <Paper
          sx={{
            minWidth: 200,
            minHeight: {xs: 200 ,lg:350},
            borderRadius: 5,
            p: {xs:2,sm:4,md:5},
            bgcolor: "background.default",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Paper>
      </motion.div>
    </motion.div>
  );
};

export default Card;
