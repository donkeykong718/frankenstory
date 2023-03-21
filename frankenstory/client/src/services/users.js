import api from "./apiConfig.js";

const LOCALSTORAGE_KEY = 'token'

export const getUser = async (search) => {
  try {
    const response = await api.get(`/api/user/${search}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (username, password) => {
  try {
    const response = await api.post("/api/user/sign-up/", { username, password });
    localStorage.setItem(LOCALSTORAGE_KEY, response.data);


    return response.data;
  }

  catch (error) {
    throw error;
  }
};

export const signin = async (username, password) => {
  try {
    const response = await api.post("/api/user/sign-in/", { username, password });
    localStorage.setItem(LOCALSTORAGE_KEY, response.data);
    console.log('Sign in returns:')
    console.log(response);
    localStorage.setItem("currentUser", username);

    return response.data;
  }

  catch (error) {
    throw error;
  }
};