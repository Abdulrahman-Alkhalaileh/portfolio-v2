import React from "react";
import { Divider, IconButton, Stack, StackProps, SxProps } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import DownloadIcon from "@mui/icons-material/Download";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

export interface ResumeActionsProps extends StackProps {
  fullScreen: boolean;
  handleFullScreen: () => void;
  resumeLink: string;
}

const iconStyle: SxProps = {
  width: { xs: 25, md: 30 },
  height: { xs: 25, md: 30 },
  px: { xs: 0.5, md: 1 },
};

const ResumeActions: React.FC<ResumeActionsProps> = ({
  fullScreen,
  handleFullScreen,
  resumeLink,
  ...props
}) => {
  return (
    <>
      <Stack
        direction="row"
        {...props}
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          borderRadius: "0px 0px 10px 0px",
          overflow: "hidden",
          color: fullScreen ? "white" : "text.primary",
          ...props.sx,
        }}
      >
        <IconButton
          onClick={() => handleFullScreen()}
          sx={{
            borderRadius: 0,
            color: "inherit",
          }}
        >
          {fullScreen ? (
            <FullscreenExitIcon sx={iconStyle} />
          ) : (
            <FullscreenIcon sx={iconStyle} />
          )}
        </IconButton>
        <Divider
          flexItem
          orientation="vertical"
          variant="middle"
          sx={{ borderColor: "inherit" }}
        />
        <IconButton
          href={resumeLink}
          download="Abdulrahman-Alkhalaileh.pdf"
          sx={{
            borderRadius: 0,
            color: "inherit",
          }}
        >
          <DownloadIcon sx={iconStyle} />
        </IconButton>
      </Stack>
    </>
  );
};

export default ResumeActions;
