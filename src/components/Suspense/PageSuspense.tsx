import React from "react";
import {
  CircularProgress,
  CircularProgressProps,
  Stack,
  StackProps,
} from "@mui/material";

export interface PageSuspenseProps extends StackProps {
  iconProps?: CircularProgressProps;
}

const PageSuspense: React.FC<PageSuspenseProps> = ({ iconProps, ...props }) => {
  return (
    <Stack justifyContent="center" alignItems="center" {...props}>
      <CircularProgress size={70} {...iconProps} />
    </Stack>
  );
};

export default PageSuspense;
