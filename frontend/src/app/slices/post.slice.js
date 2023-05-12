import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deletePostById,
  getPostById,
  getPosts,
  getPostsByUserId,
  likePostById,
  savePost,
  updatePostById,
} from "../actions/post.actions";

const getPostByIdFunc = (posts, postId) => {
  const result = posts.filter(function (el) {
    return el.id === postId;
  });

  return result ? result[0] : null; // or undefined
};

const postSlice = createSlice({
  name: "post",
  initialState: {
    selectedPost: null,
    posts: [],
  },
  reducers: {
    getPostToShareById: (state, action) => {
      state.selectedPost = getPostByIdFunc(state.posts, action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(savePost.fulfilled, (state, action) => {
      state.posts = [...state.posts, action.payload];
      toast.success("Post Added");
    });
    builder.addCase(savePost.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.selectedPost = action.payload;
    });
    builder.addCase(getPostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getPostsByUserId.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getPostsByUserId.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updatePostById.fulfilled, (state, action) => {
      state.posts = state.posts.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      toast.success("Post Edited");
    });
    builder.addCase(updatePostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(likePostById.fulfilled, (state, action) => {
      state.posts = state.posts.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
    });
    builder.addCase(likePostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(deletePostById.fulfilled, (state, action) => {
      state.posts = state.posts.filter((x) => x.id !== action.payload);
      toast.success("Post Deleted");
    });
    builder.addCase(deletePostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
  },
});

export const { getPostToShareById } = postSlice.actions;

export default postSlice.reducer;
