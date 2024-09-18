import React from "react";
import { motion } from "framer-motion";
import { TypographyProps, Typography } from "@mui/material";

export interface TypingAnimationProps {
  children: React.ReactElement<TypographyProps>;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ children }) => {
  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2 * i,
      },
    }),
  };

  const child = {
    hidden: { y: '-100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200,
      },
    },
  };

  let text = "";

  // Ensure that the children is a Typography element and extract the text
  if (typeof children.props.children === 'string') {
    text = children.props.children;
  } else {
    console.error('TypingAnimation component expects a Typography component with text as children.');
    return null;
  }

  // Split the text into individual characters
  const characters = text.split('');

  return (
    <Typography {...children.props}>
      <motion.div
        className="paragraph-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {characters.map((char, index) => (
          <motion.span key={index} variants={child} style={{ display: 'inline-block' }}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    </Typography>
  );
};

export default TypingAnimation;
