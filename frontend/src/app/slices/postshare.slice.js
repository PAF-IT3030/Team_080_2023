import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { deletePostShareById, getPostShare, getPostShareById, getPostShareByUserId, savePostShare, updatePostShareById } from '../actions/postshare.actions';

const postShareSlice = createSlice({
  name: 'postshare',
  initialState: {
    selectedPost: null,
    posts: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(savePostShare.fulfilled, (state, action) => {
        state.posts = [...state.posts, action.payload];
        toast.success("Post Shared");
    });
    builder.addCase(savePostShare.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(getPostShareById.fulfilled, (state, action) => {
      state.selectedPost = action.payload;
    });
    builder.addCase(getPostShareById.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(getPostShare.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getPostShare.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(getPostShareByUserId.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
      builder.addCase(getPostShareByUserId.rejected, (state, action) => {
          toast.error("Something went wrong");
      });
    builder.addCase(updatePostShareById.fulfilled, (state, action) => {
      state.posts = state.posts.map((x) => (x.id === action.payload.id ? action.payload : x));
      toast.success("Shared Post Edited");
    });
    builder.addCase(updatePostShareById.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(deletePostShareById.fulfilled, (state, action) => {
      state.posts = state.posts.filter((x) => x.id !== action.payload);
      toast.success("Shared Post Deleted");
    });
    builder.addCase(deletePostShareById.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
  },
});

export default postShareSlice.reducer;