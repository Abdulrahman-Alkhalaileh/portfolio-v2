import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchData, SortingType } from "helpers/fetchData";
import {
  ExperienceType,
  ProjectType,
  SkillsType,
  UserInfoType,
} from "helpers/types";

// Async thunks for each collection
export const fetchExperience = createAsyncThunk(
  "firestore/fetchExperience",
  async () => {
    return (await fetchData({
      collectionName: "experience",
    })) as ExperienceType[];
  }
);

export const fetchPersonalSkills = createAsyncThunk(
  "firestore/fetchPersonalSkills",
  async () => {
    return (await fetchData({
      collectionName: "personalSkills",
    })) as SkillsType[];
  }
);

export const fetchProjects = createAsyncThunk(
  "firestore/fetchProjects",
  async () => {
    return (await fetchData({ collectionName: "projects" })) as ProjectType[];
  }
);

export const fetchTechnicalSkills = createAsyncThunk(
  "firestore/fetchTechnicalSkills",
  async ({ ...props }: Partial<SortingType>) => {
    return (await fetchData({
      collectionName: "technicalSkills",
      sort: { ...props },
    })) as SkillsType[];
  }
);

export const fetchUserInfo = createAsyncThunk(
  "firestore/fetchUserInfo",
  async () => {
    return (await fetchData({ collectionName: "userInfo" }))[0] as UserInfoType;
  }
);

export interface StateType {
  experience: ExperienceType[] | null;
  personalSkills: SkillsType[] | null;
  technicalSkills: SkillsType[] | null;
  projects: ProjectType[] | null;
  userInfo: UserInfoType | null;
  loading: boolean;
  error: string | null;
}

// Initial state for all collections
const initialState: StateType = {
  experience: null,
  personalSkills: null,
  technicalSkills: null,
  projects: null,
  userInfo: null,
  loading: false,
  error: null,
};

const firestoreSlice = createSlice({
  name: "firestore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetchExperience
    builder.addCase(fetchExperience.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchExperience.fulfilled,
      (state, action: PayloadAction<ExperienceType[]>) => {
        state.loading = false;
        state.experience = action.payload;
      }
    );

    // Handle fetchPersonalSkills
    builder.addCase(
      fetchPersonalSkills.fulfilled,
      (state, action: PayloadAction<SkillsType[]>) => {
        state.personalSkills = action.payload;
      }
    );

    // Handle fetchProjects
    builder.addCase(
      fetchProjects.fulfilled,
      (state, action: PayloadAction<ProjectType[]>) => {
        state.projects = action.payload;
      }
    );

    // Handle fetchTechnicalSkills
    builder.addCase(
      fetchTechnicalSkills.fulfilled,
      (state, action: PayloadAction<SkillsType[]>) => {
        state.technicalSkills = action.payload;
      }
    );

    // Handle fetchUserInfo
    builder.addCase(
      fetchUserInfo.fulfilled,
      (state, action: PayloadAction<UserInfoType>) => {
        state.userInfo = action.payload;
      }
    );
  },
});

export default firestoreSlice.reducer;
