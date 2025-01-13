import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import actGetUser from "./act/actGetUser";
import actUpdateUser from "./act/actUpdateUser";
import actDeleteProfilePicture from "./act/actDeleteProfilePicture";
import actUpdateProfilePicture from "./act/actUpdateProfilePicture";
import actUpdatePassword from "./act/actUpdatePassword";
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
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
    SetUser: (state, action) => {
      if (action.payload.user) state.user = action.payload.user;
     if (action.payload.accessToken) state.accessToken = action.payload.accessToken;
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
      localStorage.removeItem("accessToken");
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
    // Get user
    builder.addCase(actGetUser.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetUser.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.user = action.payload.user;
    });
    builder.addCase(actGetUser.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // Update user
    builder.addCase(actUpdateUser.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actUpdateUser.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(actUpdateUser.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // Update Profile Picture
    builder.addCase(actUpdateProfilePicture.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actUpdateProfilePicture.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (state.user) {
        state.user.profilePicture = action.payload.profilePicture;
      }
    });
    builder.addCase(actUpdateProfilePicture.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // Delete Profile Picture
    builder.addCase(actDeleteProfilePicture.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actDeleteProfilePicture.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (state.user) {
        state.user.profilePicture = action.payload.profilePicture;
      }
    });
    builder.addCase(actDeleteProfilePicture.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // change password
    builder.addCase(actUpdatePassword.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actUpdatePassword.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(actUpdatePassword.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export {
  actAuthRegister,
  actAuthLogin,
  actAuthLogout,
  actGetUser,
  actUpdateUser,
  actUpdateProfilePicture,
  actDeleteProfilePicture,
  actUpdatePassword,
};
export const { resetUI, authLogout, authLogin, SetUser } = authSlice.actions;
export default authSlice.reducer;
