import axios from "axios";

// Create a new instance of axios

const api = axios.create({
  baseURL: "http://localhost:5174/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Define the API endpoints

const endpoints = {
  getUsers: async () => await api.get("/users"),
  getUser: async (userId) => await api.get(`/users/${userId}`),
  createUser: async (user) => await api.post("/users/signup", user),
  loginUser: async (user) => await api.post("/users/login", user),
  updateUser: async (userId, user) => await api.put(`/users/${userId}`, user),
  deleteUser: async (userId) => await api.delete(`/users/${userId}`),
};

// Export the API endpoints

export default endpoints;

// Example usage:
