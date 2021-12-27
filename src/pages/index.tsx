import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import client from "../../apollo-client";
import { gql } from "@apollo/client";

type Post = {
  title?: string;
  slug?: string;
  description?: string;
  content?: string;
};

type PageProps = {
  posts: Array<Post>;
};

const Home: NextPage<PageProps> = ({ posts }) => {
  return (
    <div className="flex justify-center items-center bg-indigo-800 my-8 hover:bg-indigo-600 ">
      <Head>
        <title>{posts[0].title}</title>
        <meta name="description" content="Blog do fezin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl text-black font-bold ">{posts[0].title}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          title
          slug
          description
          content {
            text
          }
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

export default Home;
