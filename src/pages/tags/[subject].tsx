import { gql } from "@apollo/client";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import styled from "styled-components";
import client from "../../../apollo-client";
import PostList from "../../components/PostList";
import PostPreview from "../../components/PostPreview";

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

const SubjectContainer = styled.div`
  display: flex;
`;

const Subject = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-transform: capitalize;

  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const PostByTagPage = ({
  tag,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // console.log(tag);
  return (
    <PostList>
      <Head>
        <title>Felipe R. | {`${tag.subject}`}</title>
        <meta
          name="description"
          content={`posts with the tag ${tag.subject}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SubjectContainer>
        <Subject>{tag.subject}</Subject>
      </SubjectContainer>
      {tag?.posts.map((post: Post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </PostList>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { data } = await client.query({
    query: gql`
      query Tag($subject: String!) {
        tag(where: { subject: $subject }) {
          subject
          posts(orderBy: createdAt_DESC) {
            id
            title
            description
            slug
            tags {
              id
              subject
            }
            createdAt
          }
        }
      }
    `,
    variables: { subject: context.params?.subject },
  });

  return {
    props: {
      tag: data.tag,
    },
  };
};

export default PostByTagPage;
