import { gql } from "@apollo/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styled from "styled-components";
import client from "../../../apollo-client";
import TagPill from "../../components/TagPill";

type Post = {
  id: string;
};

type Tag = {
  id: string;
  subject: string;
  posts: Post[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  height: fit-content;
  margin-bottom: 4rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--turquoise-200);
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 2rem;
  width: 1024px;
`;

const TagPage = ({
  tags,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container>
      <TitleContainer>
        <Title>Tags</Title>
      </TitleContainer>
      <TagsContainer>
        {tags.map((tag: Tag) => (
          <TagPill key={tag.id} tag={tag} />
        ))}
      </TagsContainer>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Tags {
        tags {
          id
          subject
          posts {
            id
          }
        }
      }
    `,
  });

  return {
    props: {
      tags: data.tags,
    },
  };
};

export default TagPage;
