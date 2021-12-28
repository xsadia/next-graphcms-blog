import Link from "next/link";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

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
  height: 180px;
  padding: 1rem;
  color: #fff;

  & + & {
    margin-top: 0.5rem;
    border-top: 1px solid var(--turquoise-500);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 720px;
`;

const PostTitle = styled.h1`
  cursor: pointer;
  font-size: 1.5rem;
  transition: color 0.2s;
  transition: text-shadow 0.2s;

  &:hover {
    color: var(--turquoise-200);
    text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
      0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
      0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
      0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
  }
`;

const PostDescription = styled.p`
  font-size: 1.2rem;
  color: #bfbfbf;
  margin: 0;
`;

const PostDate = styled.h3`
  margin-right: 0.5rem;
  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const PostButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90px;
  cursor: pointer;
  color: var(--turquoise-200);
  transition: text-shadow 0.2s;

  &:hover {
    text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
      0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
      0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
      0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TagWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  text-transform: lowercase;
  color: var(--turquoise-200);
  & + & {
    margin-left: 0.5rem;
  }
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

        <TagContainer>
          <PostDescription>{post.description}</PostDescription>
          <TagWrapper>
            {post.tags.map((tag) => (
              <Tag key={tag.id}>#{tag.subject}</Tag>
            ))}
          </TagWrapper>
        </TagContainer>
        <Link href={`/posts/${post.slug}`}>
          <PostButtonContainer>
            <span>Ler mais</span>
            <FiArrowRight />
          </PostButtonContainer>
        </Link>
      </TitleContainer>
    </PostPreviewContainer>
  );
};

export default PostPreview;
