import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/services/api/axios.config";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { TUser } from "@/types";

type TResponse = {
  user: TUser;
  accessToken: string;
};

const actSetUser = createAsyncThunk("auth/actSetUser", async (_, thunk) => {
  const { rejectWithValue } = thunk;

  try {
    const res = await axios.post<TResponse>("/auth/check-auth-cookies");
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
});
export default actSetUser;