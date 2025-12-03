import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Convenience helpers for education endpoints
const getEducation = () => api.get("/api/education");
const createEducation = (payload) => api.post("/api/education", payload);
const updateEducation = (id, payload) => api.put(`/api/education/${id}`, payload);
const deleteEducation = (id) => api.delete(`/api/education/${id}`);

export default api;
export { getEducation, createEducation, updateEducation, deleteEducation };
