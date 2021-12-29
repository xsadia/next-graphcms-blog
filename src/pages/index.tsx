import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import styled from "styled-components";

type Post = {
  title?: string;
  slug?: string;
  description?: string;
  content?: string;
};

type PageProps = {
  posts: Array<Post>;
};

const WorkInProgress = styled.h1`
  color: #fff;
  text-shadow: 0 0 7px var(--turquoise-500), 0 0 10px var(--turquoise-500),
    0 0 21px var(--turquoise-500), 0 0 42px var(--turquoise-500),
    0 0 82px var(--turquoise-500), 0 0 92px var(--turquoise-500),
    0 0 102px var(--turquoise-500), 0 0 151px var(--turquoise-500);
`;

const Home: NextPage<PageProps> = ({ posts }) => {
  return (
    <div className="flex justify-center items-center bg-indigo-800 my-8 hover:bg-indigo-600 ">
      <Head>
        <title>Felipe R.</title>
        <meta name="description" content="Blog do fezin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WorkInProgress>Work in progress...</WorkInProgress>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await client.query({
//     query: gql`
//       query Posts {
//         posts {
//           title
//           slug
//           description
//           content {
//             text
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       posts: data.posts,
//     },
//   };
// };

export default Home;
