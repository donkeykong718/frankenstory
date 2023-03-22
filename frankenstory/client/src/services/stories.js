import api from "./apiConfig.js";

export const getStories = async () => {
  try {
    const response = await api.get("/api/story/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFinishedStories = async () => {
  try {
    const response = await api.get("/api/story/gallery/");
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getStory = async (id) => {
  try {
    const response = await api.get(`/api/story/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createStory = async (startData) => {
  try {
    const response = await api.post("/api/story/", startData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateStory = async (id, StoryData) => {
  try {
    const response = await api.put(`/api/story/${id}`, StoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
