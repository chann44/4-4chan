import { makeRequest } from "../uttils/makeRequest";

export const createComment = (
  message: string,
  parentId: string,
  postId: string
) => {
  console.log(message);
  return makeRequest("/cc", {
    method: "POST",
    data: {
      message,
      parentId,
      postId,
    },
  });
};
