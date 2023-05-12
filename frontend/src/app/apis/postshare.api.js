import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const POSTSHAREAPI = {
    savePostShare: (data) => axios.post(`${BASE_URL}/api/postshare`, data),
    getPostShare: () => axios.get(`${BASE_URL}/api/postshare`),
    getPostShareById: (id) => axios.get(`${BASE_URL}/api/postshare/${id}`),
    getPostShareByUserId: (id) => axios.get(`${BASE_URL}/api/postshare/user/${id}`),
    updatePostShareById: (id, data) => axios.put(`${BASE_URL}/api/postshare/${id}`, data),
    deletePostShareById: (id) => axios.delete(`${BASE_URL}/api/postshare/${id}`),
};