import React, { useEffect } from "react";
import {
  fetchExperience,
  fetchPersonalSkills,
  fetchProjects,
  fetchTechnicalSkills,
  fetchUserInfo,
} from "reduxConfigs/slices/firestoreSlice";
import { useAppDispatch, useAppSelector } from "reduxConfigs/store";

const SyncData: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    experience,
    personalSkills,
    projects,
    technicalSkills,
    userInfo,
  } = useAppSelector((state) => state.firestoreSlice);

  useEffect(() => {
    // Dispatch all fetch actions if data is not already present
    if (!experience) dispatch(fetchExperience());
    if (!personalSkills) dispatch(fetchPersonalSkills());
    if (!projects) dispatch(fetchProjects());
    if (!technicalSkills) dispatch(fetchTechnicalSkills({}));
    if (!userInfo) dispatch(fetchUserInfo());
  }, [
    dispatch,
    experience,
    personalSkills,
    projects,
    technicalSkills,
    userInfo,
  ]);

  return <></>;
};

export default SyncData;
