import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deleteCommentById,
  getCommentsByPostId,
  saveComment,
  updateCommentById,
} from "../actions/comment.actions";

const postSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveComment.fulfilled, (state, action) => {
      state.comments = [...state.comments, action.payload];
      toast.success("Comment Added");
    });
    builder.addCase(saveComment.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getCommentsByPostId.fulfilled, (state, action) => {
      state.comments = action.comments;
    });
    builder.addCase(getCommentsByPostId.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updateCommentById.fulfilled, (state, action) => {
      state.comments = state.comments.map((x) =>
        x.id === action.payload ? action.payload : x
      );
      toast.success("Comment Edited");
    });
    builder.addCase(updateCommentById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(deleteCommentById.fulfilled, (state, action) => {
      state.comments = state.comments.filter((x) => x.id !== action.payload);
      toast.success("Comment Deleted");
    });
    builder.addCase(deleteCommentById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
  },
});

export default postSlice.reducer;
