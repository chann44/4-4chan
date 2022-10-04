import { makeRequest } from "../uttils/makeRequest";

export const getPost = async () => {
  return makeRequest("/", {});
};

export const getPostById = async (id: string | undefined) => {
  return makeRequest(`/post/${id}`, {});
};

export const getAllBoards = async () => {
  console.log("hey");
  return makeRequest("/boards", {});
};

export const create = async (
  postValue: string,
  image: string | null = null,
  title: string,
  link: string,
  linkTitle: string,
  boardId: string | null = "025079d4-38ba-4ab2-b3fc-aba5f06fa37e"
) => {
  return makeRequest("/createpost", {
    method: "POST",
    data: {
      body: postValue,
      image: image,
      linkTitle: linkTitle,
      url: link,
      title: title,
      boardId: boardId,
    },
  });
};
