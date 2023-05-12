import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { deleteUserById, followUserById, getAllUsers, getUser, login, register, updateUserById } from "../actions/user.actions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    user: null,
    users: [],
    loginStatus: false,
  },
  reducers: {
    logout: (state) => {
      window.location.href = "/login";
      sessionStorage.clear();
      sessionStorage.clear();
      state.userId=null;
      state.user = null;
      state.loginStatus = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      // Add user to the state array
      state.userId = action.payload.userId;
      state.loginStatus = true;
      sessionStorage.setItem("userId", action.payload.userId);
      sessionStorage.setItem("Authorization", action.payload.accessToken);
      window.location.href = "/";
    });
    builder.addCase(login.rejected, (state, action) => {
      toast.error("User name or Password is Invalid");
    });
    builder.addCase(register.fulfilled, (state, action) => {
      // Add user to the state array
      state.userId = action.payload.userId;
      state.loginStatus = true;
      sessionStorage.setItem("userId", action.payload.userId);
      sessionStorage.setItem("Authorization", action.payload.accessToken);
      window.location.href = "/";
    });
    builder.addCase(register.rejected, (state, action) => {
      toast.error("Give valid User name and Password");
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userId = action.payload.id;
      state.user = action.payload;
      state.loginStatus = true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updateUserById.fulfilled, (state, action) => {
      window.location.href = "/user";
      toast.success("User Profile Updated");
    });
    builder.addCase(updateUserById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });

    builder.addCase(deleteUserById.fulfilled, (state, action) => {
      toast.success("User Profile Successfully Deleted");
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = "/login";
    });

    builder.addCase(deleteUserById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });

    builder.addCase(followUserById.fulfilled, (state, action) => {
      state.users = state.users.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
    });
    builder.addCase(followUserById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
  },
});

export const {logout} = userSlice.actions;

export default userSlice.reducer;
