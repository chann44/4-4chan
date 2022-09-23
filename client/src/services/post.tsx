import { makeRequest } from "../uttils/makeRequest";

export const getPost = async () => {
  return makeRequest("/", {});
};
