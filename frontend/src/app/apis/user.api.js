import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_API;

const configs = {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('Authorization')}`,
  },
};

export const USERAPI = {
  login: (data) => axios.post(`${BASE_URL}/api/auth/login`, data),
  register: (data) => axios.post(`${BASE_URL}/api/auth/register`, data),
  getUser: (id) => axios.get(`${BASE_URL}/api/users/${id}`, configs),
  updateUserById: (id, data) => axios.put(`${BASE_URL}/api/users/${id}`, data),
  followUserById: (id, data) => axios.put(`${BASE_URL}/api/users/follow/${id}`, data),
  deleteUserById: (id) => axios.delete(`${BASE_URL}/api/users/delete/${id}`),
  getAllUsers: () => axios.get(`${BASE_URL}/api/users`),
};
