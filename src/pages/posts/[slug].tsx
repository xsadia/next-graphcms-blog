import { gql } from "@apollo/client";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import client from "../../../apollo-client";

// type Content = {
//   text: string;
// };

// type Post = {
//   title?: string;
//   slug?: string;
//   description?: string;
//   content?: string;
// };

const PostPage = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{post.title}</h1>
      <main>{post.content.text}</main>
    </div>
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
            text
          }
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
