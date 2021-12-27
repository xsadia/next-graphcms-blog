import Link from "next/link";
import styled from "styled-components";

type Tag = {
  id: string;
  subject: string;
};

type Post = {
  title: string;
  description: string;
  slug: string;
  tags: Tag[];
  createdAt: string;
};

type PostPreviewProps = {
  post: Post;
};

const PostPreviewContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1024px;
  height: 164px;
  padding: 1rem /* 2rem */;
  color: #fff;

  & + & {
    margin-top: 0.5rem;
    border-top: 1px solid var(--turquoise-500);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  /* flex: 1; */
  width: 720px;
`;

const PostTitle = styled.h1`
  cursor: pointer;
  font-size: 1.5rem;
  transition: color 0.2s;

  &:hover {
    color: #808080;
  }
`;

const PostDescription = styled.p`
  font-size: 1.2rem;
  color: #bfbfbf;
`;

const PostDate = styled.h3`
  margin-right: 0.5rem;
  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <PostPreviewContainer>
      <PostDate>
        {new Intl.DateTimeFormat("pt-BR", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        }).format(new Date(post.createdAt))}
      </PostDate>

      <TitleContainer>
        <Link href={`/posts/${post.slug}`}>
          <PostTitle>{post.title}</PostTitle>
        </Link>
        <PostDescription>{post.description}</PostDescription>
      </TitleContainer>
    </PostPreviewContainer>
  );
};

export default PostPreview;
