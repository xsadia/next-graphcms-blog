import { gql } from "@apollo/client";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
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

const PostsListPage = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PostList>
      <Head>
        <title>Felipe R. | Posts</title>
        <meta name="description" content="Posts do fezin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {posts.map((post: Post) => (
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
      query Posts {
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
    `,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
};

export default PostsListPage;
