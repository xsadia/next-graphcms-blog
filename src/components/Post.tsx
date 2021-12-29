import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

type Content = {
  html: string;
};

type Post = {
  title: string;
  description: string;
  content: Content;
  createdAt: string;
};

type PostProps = {
  post: Post;
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const PostTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid var(--turquoise-500);
  padding-bottom: 1rem;
`;

const PostTitle = styled.h1`
  text-transform: capitalize;
  margin: 0;
  font-size: 3rem;
  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const PostDescription = styled.h3`
  color: var(--turquoise-200);
`;

const PostContent = styled.main`
  text-align: justify;
  width: 1024px;
  p {
    font-size: 1.1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--turquoise-200);
  }

  code {
    background: var(--gray-200);
    display: inline-block;
    padding: 0.5rem;
    width: 1024px;
  }
`;

const BackButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 72px;
  cursor: pointer;
  color: var(--turquoise-200);
  align-self: start;
  transition: text-shadow 0.2s;

  &:hover {
    text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
      0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
      0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
      0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
  }
`;

const Post = ({ post }: PostProps) => {
  return (
    <PostContainer>
      <PostTitleContainer>
        <span>
          {new Intl.DateTimeFormat("pt-BR", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          }).format(new Date(post.createdAt))}
        </span>
        <PostTitle>{post.title}</PostTitle>
        <PostDescription>{post.description}</PostDescription>
        <Link href="/posts">
          <BackButton>
            <FiArrowLeft />
            <span>voltar</span>
          </BackButton>
        </Link>
      </PostTitleContainer>
      <PostContent dangerouslySetInnerHTML={{ __html: post.content.html }} />
    </PostContainer>
  );
};

export default Post;