import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/services/api/axios.config";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { TUser } from "@/types";

type TFormData = {
  email: string;
  password: string;
  role: "user" | "seller";
};

type TResponse = {
  user: TUser;
  accessToken: string;
};

const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axios.post<TResponse>("/auth/login", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthLogin;
