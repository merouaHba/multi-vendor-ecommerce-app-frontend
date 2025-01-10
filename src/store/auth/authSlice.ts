import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import actAuthLogout from "./act/actAuthLogout";
import { TLoading, TUser, isString } from "@/types";

interface IAuthState {
  user: TUser | null;
  accessToken: string | null;
  loading: TLoading;
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  accessToken: null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    resetUI: (state) => {
      state.loading = "idle";
      state.error = null;
    },
    authLogout: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    //register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      localStorage.setItem("accessToken", action.payload.accessToken);
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // logout
    builder.addCase(actAuthLogout.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogout.fulfilled, (state) => {
      state.loading = "succeeded";
      state.accessToken = null;
      state.user = null;
      localStorage.removeItem("accessToken");
    });
    builder.addCase(actAuthLogout.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actAuthRegister, actAuthLogin, actAuthLogout };
export const { resetUI, authLogout, authLogin } = authSlice.actions;
export default authSlice.reducer;
