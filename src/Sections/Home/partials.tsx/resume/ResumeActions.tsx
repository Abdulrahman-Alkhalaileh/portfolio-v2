import React from "react";
import { ButtonGroupProps } from "@mui/material";
import { Button, ButtonGroup } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import DownloadIcon from "@mui/icons-material/Download";
import { HOME_CONTENT } from "configs/constant";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

export interface ResumeActionsProps extends ButtonGroupProps {
  fullScreen: boolean;
  handleFullScreen: () => void;
}

const ResumeActions: React.FC<ResumeActionsProps> = ({
  fullScreen,
  handleFullScreen,
  ...props
}) => {
  return (
    <>
      <ButtonGroup
        variant="contained"
        {...props}
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          ...props.sx,
        }}
      >
        <Button
          onClick={() => handleFullScreen()}
          style={{
            borderRadius: "0px 0px 0px 0px",
          }}
        >
          {fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </Button>
        <Button
          href={HOME_CONTENT.resume}
          download="Abdulrahman-Alkhalaileh.pdf"
          style={{
            borderRadius: "0px 0px 10px 0px",
          }}
        >
          <DownloadIcon />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ResumeActions;
