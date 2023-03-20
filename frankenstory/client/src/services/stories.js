import api from "./apiConfig.js";

export const getStories = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStory = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createStory = async (startData) => {
  try {
    const response = await api.post("/", startData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateStory = async (id, StoryData) => {
  try {
    const response = await api.put(`/${id}`, StoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};