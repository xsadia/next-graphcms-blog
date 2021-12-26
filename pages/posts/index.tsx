import { gql } from "@apollo/client";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import client from "../../apollo-client";

type Post = {
  title?: string;
  slug?: string;
  description?: string;
  content?: string;
};

const PostsList: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FezinPosts</title>
        <meta name="description" content="Posts do fezin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Posts</h1>
    </div>
  );
};

/* export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { data } = await client.query({
    query: gql`
      query Post($slug: String!) {
        posts(where: { slug: $slug }) {
          title
          slug
          description
          content {
            text
          }
        }
      }
    `,
    variables: { slug: context.params },
  });

  return {
    props: {
      post: data.post,
    },
  };
};
*/

export default PostsList;
