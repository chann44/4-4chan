import axios from "axios";

export const api = axios.create({
  baseURL: "https://four4chanbackend.onrender.com",

  // baseURL: "http://localhost:5000",
});

export const makeRequest = async (url: string, options: any) => {
  try {
    const res = await api(url, options);
    console.log(url);
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
