import axios from "axios";

const API_URL = "/api/users/";

//register a user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  //set user to local storage
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login the user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//logout the user
const logout = () => localStorage.removeItem("user");

//export the components
const authService = { register, login, logout };

export default authService;
