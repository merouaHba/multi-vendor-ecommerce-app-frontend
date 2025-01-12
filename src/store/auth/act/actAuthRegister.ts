import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/services/api/axios.config";
import axiosErrorHandler from "@/utils/axiosErrorHandler";

type TFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  terms: boolean;
};

const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axios.post("/auth/register", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthRegister;
