import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const NOTIFICATIONAPI = {
    saveNotification: (data) => axios.post(`${BASE_URL}/api/notifications`, data),
    getNotificationsByUserId: (id) => axios.get(`${BASE_URL}/api/notifications/user/${id}`),
    updateNotificationsById: (id,data) => axios.get(`${BASE_URL}/api/notifications/user/${id}`,data),
};