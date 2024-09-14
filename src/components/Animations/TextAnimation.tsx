import { MotionProps, motion } from "framer-motion";
import React from "react";

export interface TextAnimationProps extends MotionProps {}

const TextAnimation: React.FC<TextAnimationProps> = ({
  children,
  ...props
}) => {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", ...props.transition }}
      key={crypto.randomUUID()}
      {...props}
      style={{ x: -50, opacity: 0, ...props.style }}
    >
      {children}
    </motion.div>
  );
};

export default TextAnimation;
