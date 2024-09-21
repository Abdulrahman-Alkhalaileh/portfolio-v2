import { Button, ButtonProps } from "@mui/material";
import React, { useState } from "react";
import ResumeModal from "./ResumeModal";
import DescriptionIcon from "@mui/icons-material/Description";

export interface ResumeButtonProps extends ButtonProps {}

const ResumeButton: React.FC<ResumeButtonProps> = ({ ...props }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        {...props}
        onClick={() => setOpenModal(true)}
        sx={{
          border: 2,
          minWidth: { xs: 100, sm: 120 },
          fontSize: { xs: 16, sm: 20 },
          color: "text.primary",
          gap: 1,
          ...props.sx,
        }}
      >
        Resume <DescriptionIcon />
      </Button>
      <ResumeModal open={openModal} handleClose={() => setOpenModal(false)} />
    </>
  );
};

export default ResumeButton;
