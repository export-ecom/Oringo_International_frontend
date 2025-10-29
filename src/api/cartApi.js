import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const apiGetCart = async () => {
  const token = localStorage.getItem("access_token");
  
  return await axios.get(`${API_URL}/cart/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
