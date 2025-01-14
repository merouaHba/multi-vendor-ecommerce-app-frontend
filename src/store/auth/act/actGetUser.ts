import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/services/api/axios.config";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { TUser } from "@/types";

type TResponse = {
  user: TUser;
};

const actGetUser = createAsyncThunk(
  "auth/actGetUser",
  async (_, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axios.get<TResponse>("/users/user/");
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetUser;
