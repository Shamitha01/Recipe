import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001", // Your JSON server base URL
});

export const getRecipes = async () => {
    const response = await API.get("/recipes");
    return response.data; // ✅ return only the useful array
  };
  
