import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/services/api/axios.config";
import axiosErrorHandler from "@/utils/axiosErrorHandler";

type TResponse = {
  profilePicture: string;
};

const actDeleteProfilePicture = createAsyncThunk(
  "auth/actDeleteProfilePicture",
  async (_, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axios.delete<TResponse>("/users/delete-profile-image/");
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actDeleteProfilePicture;
