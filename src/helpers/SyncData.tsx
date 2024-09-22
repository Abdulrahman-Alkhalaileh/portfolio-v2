import React, { useEffect } from "react";
import {
  fetchExperience,
  fetchPersonalSkills,
  fetchProjects,
  fetchTechnicalSkills,
  fetchUserInfo,
} from "configs/redux/slices/firestoreSlice";
import { useAppDispatch } from "configs/redux/store";

const SyncData: React.FC = () => {
  const dispatcher = useAppDispatch();

  useEffect(() => {
    // Dispatch all fetch actions initially
    dispatcher(fetchExperience());
    dispatcher(fetchPersonalSkills());
    dispatcher(fetchProjects());
    dispatcher(fetchTechnicalSkills({}));
    dispatcher(fetchUserInfo());
  }, [dispatcher]);

  return <></>;
};

export default SyncData;
