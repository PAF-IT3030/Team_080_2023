import { createAsyncThunk } from "@reduxjs/toolkit";
import { NOTIFICATIONAPI } from "../apis/notification.api";

export const saveNotification = createAsyncThunk("notification/saveNotification", async (data) => {
  const response = await NOTIFICATIONAPI.saveNotification(data);
  return response.data;
});

export const getNotificationsByUserId = createAsyncThunk(
  "notification/getNotificationsByUserId",
  async (id) => {
    const response = await NOTIFICATIONAPI.getNotificationsByUserId(id);
    return response.data;
  }
);

export const updateNotificationsById = createAsyncThunk(
  "notification/updateNotificationsById",
  async (data) => {
    const response = await NOTIFICATIONAPI.updateNotificationsById(data.id, data);
    return data.id;
  }
);
