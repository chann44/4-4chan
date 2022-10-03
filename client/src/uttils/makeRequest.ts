import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const makeRequest = async (url: string, options: any) => {
  try {
    const res = await api(url, options);
    console.log(res);
    return res.data;
  } catch (e: any) {
    if (e) {
      console.log(e);
      return e.response.data;
    } else {
      return "error";
    }
  }
};
