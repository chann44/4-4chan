import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const makeRequest = async (url: string, options: any) => {
  try {
    const res = await api(url, options);
    return res.data;
  } catch (e: any) {
    if (e) {
      return e.response.data;
    } else {
      return "error";
    }
  }
};
