import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/services/api/axios.config";
import axiosErrorHandler from "@/utils/axiosErrorHandler";
import { TUser } from "@/types";

type TFormData = {
  firstname?: string;

  lastname?: string;

  email?: string;

  mobile?: string | null;

  address?: string;
};

type TResponse = {
  user: TUser;
  accessToken: string;
};

const actUpdateUser = createAsyncThunk(
  "auth/actUpdateUser",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axios.put<TResponse>("/users/user/", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actUpdateUser;
