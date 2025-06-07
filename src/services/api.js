import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001", // Your JSON server base URL
});

export const getRecipes = async () => {
  const response = await API.get("/recipes");
  return response.data;
};

export const getRecipe = async (id) => {
  const response = await API.get(`/recipes/${id}`);
  return response.data;
};

export const addRecipe = async (newRecipe) => {
  const response = await API.post("/recipes", newRecipe);
  return response.data;
};

export const updateRecipe = async (id, updatedRecipe) => {
  const response = await API.put(`/recipes/${id}`, updatedRecipe);
  return response.data;
};

export const deleteRecipe = async (id) => {
  const response = await API.delete(`/recipes/${id}`);
  return response.data;
};
