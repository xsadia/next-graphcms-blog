import { gql } from "@apollo/client";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import client from "../../../apollo-client";
import Post from "../../components/Post";

type PostType = {
  slug: string;
};

const PostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta name="description" content={post.description} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post post={post} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          slug
        }
      }
    `,
  });

  const paths = data.posts.map((post: PostType) => ({
    params: {
      slug: post.slug,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
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

  return {
    props: {
      post: data.post,
    },
  };
};

export default PostPage;
