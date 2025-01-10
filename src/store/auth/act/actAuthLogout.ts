import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/services/api/axios.config";
import axiosErrorHandler from "@/utils/axiosErrorHandler";


const actAuthLogout = createAsyncThunk(
  "auth/actAuthLogout",
  async (_, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axios.delete("/auth/logout");
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthLogout;
