import axios from "axios";

import { Add_User } from "../reducers/userReducer";

export const registration = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/registration",
      { email, password }
    );

    console.log("yser created", response.data);
    alert(response.data.message);
  } catch (error) {
    console.log("error ", error);
    alert(error.response.data.message);
  }
};
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      dispatch(Add_User(response.data.user));
      const token = localStorage.setItem("token", response.data.token);
      console.log("yser created", response.data);
      alert(response.data.message, token);
    } catch (error) {
      console.log("error ", error);
      alert(error.response.data.message);
    }
  };
};
