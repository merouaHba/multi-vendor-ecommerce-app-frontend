import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/services/api/axios.config";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { TUser } from "@/types";

type TFormData = {
  currentPassword: string;
  password: string;
};

type TResponse = {
  user: TUser;
  accessToken: string;
};

const actUpdatePassword = createAsyncThunk(
  "auth/actUpdatePassword",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axios.put<TResponse>("/auth/change-password", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actUpdatePassword;
