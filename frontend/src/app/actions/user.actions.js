import { createAsyncThunk } from "@reduxjs/toolkit";
import { USERAPI } from "../apis/user.api";

export const login = createAsyncThunk(
  "user/login",
  async (data) => {
      const response = await USERAPI.login(data);
      return response.data;
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (data) => {
      const response = await USERAPI.register(data);
      return response.data;
  }
);

export const getAllUsers = createAsyncThunk('user/getAllUsers', async () => {
  const response = await USERAPI.getAllUsers();
  return response.data;
});

export const getUser = createAsyncThunk('user/getUser', async (id) => {
  const response = await USERAPI.getUser(id);
  return response.data;
});

export const updateUserById = createAsyncThunk(
  "user/updateUserById",
  async (data) => {
    const response = await USERAPI.updateUserById(data.id, data);
    return response.data;
  }
);

export const deleteUserById = createAsyncThunk(
  "user/deleteUserById",
  async (id) => {
    const response = await USERAPI.deleteUserById(id);
    return response.data;
  }
);

export const followUserById = createAsyncThunk(
  "user/followUserById",
  async (data) => {
    const response = await USERAPI.followUserById(data.id, data);
    return response.data;
  }
);