import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PostContextProvider = ({ children }: Props) => {
  return <>{children}</>;
};
