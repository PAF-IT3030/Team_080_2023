import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const COMMENTAPI = {
    saveComment: (data) => axios.post(`${BASE_URL}/api/comments`, data),
    getComments: () => axios.get(`${BASE_URL}/api/comments`),
    getCommentsByPostId: (id) => axios.get(`${BASE_URL}/api/comments/post/${id}`),
    updateCommentById: (id, data) => axios.put(`${BASE_URL}/api/comments/${id}`, data),
    deleteCommentById: (id) => axios.delete(`${BASE_URL}/api/comments/${id}`),
};