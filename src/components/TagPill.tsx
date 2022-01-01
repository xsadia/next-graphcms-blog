import Link from "next/link";
import styled from "styled-components";

type Post = {
  id: string;
};

type Tag = {
  id: string;
  subject: string;
  posts: Post[];
};

type TagPillProps = {
  tag: Tag;
};

const Pill = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid var(--turquoise-200);
  border-radius: 32px;
  width: fit-content;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0.5rem 1rem;
  background: var(--gray-500);
  cursor: pointer;
  transition: text-shadow 0.2s;

  &:hover {
    text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
      0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
      0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
      0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
  }
`;

const Subject = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--turquoise-200);
  margin: 0;
`;

const TagPill = ({ tag }: TagPillProps) => {
  return (
    <Link href={`/tags/${tag.subject}`}>
      <Pill title={`${tag.subject}`}>
        <Subject>
          {tag.subject}({tag.posts.length})
        </Subject>
      </Pill>
    </Link>
  );
};

export default TagPill;
