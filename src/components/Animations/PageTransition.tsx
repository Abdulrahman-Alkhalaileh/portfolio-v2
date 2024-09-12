import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

export interface PageTransitionProps extends HTMLMotionProps<"div"> {}
const PageTransition: React.FC<PageTransitionProps> = ({ ...props }) => {
  return (
    <motion.div
      style={{ opacity: 0,width:'100%' }}
      transition={{ duration: 1, ease: "circOut", stiffness: 50 }}
      animate={{ opacity: 1 }}
      {...props}
    ></motion.div>
  );
};

export default PageTransition;
