import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getNotificationsByUserId, saveNotification, updateNotificationsById } from "../actions/notification.action";

const postSlice = createSlice({
  name: "notification",
  initialState: {
    notifications: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveNotification.fulfilled, (state, action) => {
      state.notifications = [...state.notifications, action.payload];
    });
    builder.addCase(saveNotification.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getNotificationsByUserId.fulfilled, (state, action) => {
      state.notifications = action.payload;
    });
    builder.addCase(getNotificationsByUserId.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updateNotificationsById.fulfilled, (state, action) => {
      state.notifications = state.notifications.filter((x) => x.id !== action.payload);
    });
    builder.addCase(updateNotificationsById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
  },
});

export default postSlice.reducer;
