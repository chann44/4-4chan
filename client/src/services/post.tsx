import { makeRequest } from "../uttils/makeRequest";

export const getPost = async () => {
  return makeRequest("/", {});
};

export const getPostById = async (id: string | undefined) => {
  return makeRequest(`/post/${id}`, {});
};

export const getAllBoards = async () => {
  return makeRequest("/boards", {});
};
