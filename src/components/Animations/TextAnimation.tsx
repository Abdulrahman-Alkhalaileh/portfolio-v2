import { MotionProps, motion } from "framer-motion";
import React from "react";

export interface TextAnimationProps extends MotionProps {}

const TextAnimation: React.FC<TextAnimationProps> = ({ children,...props }) => {
  return (
    <motion.div
      style={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      key={crypto.randomUUID()}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default TextAnimation;
