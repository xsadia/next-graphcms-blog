import { ReactNode } from "react";
import styled from "styled-components";

type PostListProps = {
  children: ReactNode;
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const PostList = ({ children }: PostListProps) => {
  return <ListContainer>{children}</ListContainer>;
};

export default PostList;
