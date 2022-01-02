import Link from "next/link";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";

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

  @media (max-width: 1024px) {
    width: 864px;
  }

  @media (max-width: 768px) {
    width: 640px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 120px;
  }

  & + & {
    margin-top: 0.5rem;
    border-top: 2px solid var(--turquoise-500);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 720px;

  @media (max-width: 768px) {
    width: 480px;
  }
`;

const PostTitle = styled.h1`
  text-transform: capitalize;
  cursor: pointer;
  font-size: 1.5rem;
  transition: color 0.2s;
  transition: text-shadow 0.2s;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

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

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const PostDate = styled.h3`
  margin-right: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

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

  @media (max-width: 480px) {
    font-size: 0.6rem;
    width: 54px;
  }

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

const Tag = styled.a`
  text-transform: lowercase;
  color: var(--turquoise-200);
  transition: text-shadow 0.2s;

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }

  & + & {
    margin-left: 0.5rem;
  }

  &:hover {
    text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
      0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
      0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
      0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
  }
`;

const PostPreview = ({ post }: PostPreviewProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480);
  };

  useEffect(() => {
    if (window !== undefined) {
      setIsMobile(window.innerWidth <= 480);
      window.addEventListener("resize", handleResize);
    }
  }, []);

  return (
    <PostPreviewContainer>
      <PostDate>
        {new Intl.DateTimeFormat("en-US", {
          month: isMobile ? "2-digit" : "long",
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
              <Link key={tag.id} href={`/tags/${tag.subject}`}>
                <Tag>#{tag.subject}</Tag>
              </Link>
            ))}
          </TagWrapper>
        </TagContainer>
        <Link href={`/posts/${post.slug}`}>
          <PostButtonContainer>
            <span>Read more</span>
            <FiArrowRight />
          </PostButtonContainer>
        </Link>
      </TitleContainer>
    </PostPreviewContainer>
  );
};

export default PostPreview;
