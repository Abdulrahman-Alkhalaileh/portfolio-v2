import React, { useEffect } from "react";
import {
  fetchExperience,
  fetchPersonalSkills,
  fetchProjects,
  fetchTechnicalSkills,
  fetchUserInfo,
} from "reduxConfigs/slices/firestoreSlice";
import { useAppDispatch } from "reduxConfigs/store";

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
