import React from "react";
import { Button, ButtonGroup, ButtonGroupProps, SxProps } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import WindowIcon from "@mui/icons-material/Window";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

export interface ViewHandlerProps extends ButtonGroupProps {}

const iconSize: SxProps = {
  width: { xs: 20, sm: 25, md: 30 },
  height: { xs: 20, sm: 25, md: 30 },
};

const ViewHandler: React.FC<ViewHandlerProps> = ({ ...props }) => {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");

  return (
    <ButtonGroup
      variant="contained"
      color="secondary"
      {...props}
      sx={{ borderRadius: 3, ...props.sx }}
    >
      <Link to="?view=grid">
        <Button disabled={view === "grid"}>
          <WindowIcon sx={iconSize} />
        </Button>
      </Link>
      <Link to="?view=slider">
        <Button disabled={view === "slider" || !view}>
          <AutoAwesomeMotionIcon sx={iconSize} />
        </Button>
      </Link>
    </ButtonGroup>
  );
};

export default ViewHandler;
