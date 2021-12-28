import { gql } from "@apollo/client";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import client from "../../../apollo-client";
import Post from "../../components/Post";

const PostPage = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post post={post} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { data } = await client.query({
    query: gql`
      query Post($slug: String!) {
        post(where: { slug: $slug }) {
          title
          slug
          description
          content {
            html
          }
          createdAt
        }
      }
    `,
    variables: { slug: context.params?.slug },
  });

  // console.log(context.query);

  return {
    props: {
      post: data.post,
    },
  };
};

export default PostPage;
