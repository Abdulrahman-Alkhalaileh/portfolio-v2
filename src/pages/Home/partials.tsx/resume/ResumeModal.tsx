import React from "react";
import CustomModal, { CustomModalProps } from "components/Popups/CustomModal";
import Resume from "./Resume";

export interface ResumeModalProps extends CustomModalProps {}

const ResumeModal: React.FC<ResumeModalProps> = ({ ...props }) => {
  return (
    <CustomModal fullWidth maxWidth='md' sx={{p:0,overflow:'hidden'}} {...props}>
      <Resume />
    </CustomModal>
  );
};

export default ResumeModal;
