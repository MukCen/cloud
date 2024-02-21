import axios from "axios";

export const registration = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/registration",
      { email, password }
    );

    console.log("yser created", response.data.message);
    alert(response.data.message);
  } catch (error) {
    console.log("error ", error);
    alert(error.response.data.message);
  }
};
