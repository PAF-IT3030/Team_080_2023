import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import postReducer from './slices/post.slice';
import commentReducer from './slices/comment.slice';
import postshareReducer from './slices/postshare.slice';
import notificationReducer from './slices/notification.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    comment: commentReducer,
    postshare: postshareReducer,
    notification: notificationReducer,
  },
});