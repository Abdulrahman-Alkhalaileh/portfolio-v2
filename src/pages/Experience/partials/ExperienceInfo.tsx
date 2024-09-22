import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { HighlightPhrases } from "utils/highlightText";

export interface ViewInfoProps {
  info: string[];
}

const ViewInfo: React.FC<ViewInfoProps> = ({ info, ...props }) => {
  return (
    <>
      {info.map((text: string, j: number) => (
        <motion.div
          style={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: j % 2 !== 0 ? 0.8 : 0.2, ease: "easeInOut" }}
          key={crypto.randomUUID()}
        >
          <Typography
            textAlign="center"
            key={crypto.randomUUID()}
            variant={"h4"}
            fontSize={
              j % 2 === 0
                ? {
                    xs: "1rem",
                    sm: "1.2rem",
                    xl: "2rem",
                  }
                : {
                    xs: "2.5rem",
                    sm: "3.2rem",
                    xl: "4rem",
                  }
            }
            whiteSpace={j % 2 === 0 ? "nowrap" : "wrap"}
            dangerouslySetInnerHTML={{ __html: HighlightPhrases(text) }}
          ></Typography>
        </motion.div>
      ))}
    </>
  );
};

export default ViewInfo;
