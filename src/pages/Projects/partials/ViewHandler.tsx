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

const ViewButton = ({
  disabled,
  link,
  icon,
}: {
  disabled: boolean;
  link: string;
  icon: React.ReactNode;
}) => {
  return (
    <Button
      disabled={disabled}
      sx={{
        p: 0,
        "&.Mui-disabled": {
          bgcolor: "primary.main",
          color: "primary.contrastText",
        },
      }}
    >
      <Link to={link} style={{ display: "flex", padding: "6px 16px" }}>
        {icon}
      </Link>
    </Button>
  );
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
      <ViewButton
        link="?view=grid"
        icon={<WindowIcon sx={iconSize} />}
        disabled={view === "grid"}
      />
      <ViewButton
        link="?view=slider"
        icon={<AutoAwesomeMotionIcon sx={iconSize} />}
        disabled={view === "slider" || !view}
      />
    </ButtonGroup>
  );
};

export default ViewHandler;
