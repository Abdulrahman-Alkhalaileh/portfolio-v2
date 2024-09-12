import React from "react";
import {
  Dialog,
  DialogContent,
  DialogProps,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export interface CustomModalProps extends DialogProps {
  handleClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  handleClose,
  ...props
}) => {
  return (
    <>
      <Dialog
        maxWidth="md"
        onClose={handleClose}
        {...props}
        PaperProps={{
          sx: {
            boxShadow: "#000000d3 0px 0px 900px 900px",
            borderRadius: 5,
            ...props.sx,
          },
        }}
      >
        <Stack direction="row" justifyContent="end" px={1}>
          <IconButton onClick={() => handleClose()} disableRipple>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Stack>
        <Divider />
        <DialogContent
          sx={{
            p: 2,
            pt: 0,
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 1,
          }}
        >
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomModal;
