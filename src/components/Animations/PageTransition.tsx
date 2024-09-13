import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

export interface PageTransitionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  ...props
}) => {
  return (
    <motion.div
      transition={{ duration: 1, ease: "circOut", stiffness: 50 }}
      animate={{ opacity: 1 }}
      {...props}
      style={{
        opacity: 0,
        width: "100%",
        flex: 1,
        ...props.style,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
