import { createAsyncThunk } from "@reduxjs/toolkit";
import { COMMENTAPI } from "../apis/comment.api";

export const saveComment = createAsyncThunk(
  "comment/saveComment",
  async (data) => {
    const response = await COMMENTAPI.saveComment(data);
    return response.data;
  }
);

export const getCommentsByPostId = createAsyncThunk(
  "comment/getCommentsByPostId",
  async (id) => {
    const response = await COMMENTAPI.getCommentsByPostId(id);
    return response.data;
  }
);

export const updateCommentById = createAsyncThunk(
  "comment/updateCommentById",
  async (data) => {
    const response = await COMMENTAPI.updateCommentById(data.id, data);
    return data.id;
  }
);

export const deleteCommentById = createAsyncThunk(
  "comment/deleteCommentById",
  async (id) => {
    const response = await COMMENTAPI.deleteCommentById(id);
    return id;
  }
);
