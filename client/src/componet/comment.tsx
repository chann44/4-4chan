import { comment } from "../context/PostContextProvider";

export const Comment = ({ message }: comment) => {
  return <p>{message}</p>;
};
