import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (formData, callback) => {
  axios
    .post("http://94.74.86.174:8080/api/login", formData)
    .then((res) => {
      callback(true, res.data.data.token);
    })
    .catch((err) => {
      console.log(err);
      callback(false, {
        errorMessage: err.response?.data?.message || "Login failed",
      });
    });
};

export const register = async (formData, callback) => {
  try {
    const res = await axios.post(
      "http://94.74.86.174:8080/api/register",
      formData
    );
    callback(true, res.data);
  } catch (err) {
    console.error("Register error:", err);
    callback(false, {
      errorMessage: err.response?.data?.message || "Register failed",
    });
  }
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
