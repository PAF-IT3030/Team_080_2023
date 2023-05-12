import { createAsyncThunk } from "@reduxjs/toolkit";
import { POSTSHAREAPI } from "../apis/postshare.api";

export const savePostShare = createAsyncThunk("postshare/savePostShare", async (data) => {
  const response = await POSTSHAREAPI.savePostShare(data);
  return response.data;
});

export const getPostShare = createAsyncThunk("postshare/getPostShare", async () => {
  const response = await POSTSHAREAPI.getPostShare();
  return response.data;
});

export const getPostShareById = createAsyncThunk("postshare/getPostShareById", async (id) => {
  const response = await POSTSHAREAPI.getPostShareById(id);
  return response.data;
});

export const getPostShareByUserId = createAsyncThunk(
  "postshare/getPostShareByUserId",
  async (id) => {
    const response = await POSTSHAREAPI.getPostShareByUserId(id);
    return response.data;
  }
);

export const updatePostShareById = createAsyncThunk(
  "postshare/updatePostShareById",
  async (data) => {
    const response = await POSTSHAREAPI.updatePostShareById(data.id, data);
    return response.data;
  }
);

export const deletePostShareById = createAsyncThunk(
  "postshare/deletePostShareById",
  async (id) => {
    const response = await POSTSHAREAPI.deletePostShareById(id);
    return id;
  }
);
