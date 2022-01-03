import { gql } from "@apollo/client";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import client from "../../../apollo-client";
import Pagination from "../../components/Pagination";
import PostList from "../../components/PostList";
import PostPreview from "../../components/PostPreview";

type Tag = {
  id: string;
  subject: string;
};

type PostEdge = {
  node: Post;
};

type Post = {
  title: string;
  description: string;
  slug: string;
  tags: Tag[];
  createdAt: string;
};

const PostsListPage = ({
  postsConnection,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  return (
    <PostList>
      <Head>
        <title>Felipe R. | Posts</title>
        <meta name="description" content="Posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {postsConnection.edges.map(({ node }: PostEdge) => (
        <PostPreview key={node.slug} post={node} />
      ))}
      <Pagination
        hasNextPage={postsConnection.pageInfo.hasNextPage}
        hasPreviousPage={postsConnection.pageInfo.hasPreviousPage}
        queryString={router.query.skip}
        endpoint="posts"
      />
    </PostList>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { data } = await client.query({
    query: gql`
      query Posts($skip: Int = 0) {
        postsConnection(first: 5, skip: $skip, orderBy: createdAt_DESC) {
          edges {
            node {
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
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `,
    variables: { skip: Number(context.query?.skip) },
  });

  console.log(context.query.skip);

  return {
    props: {
      postsConnection: data.postsConnection,
    },
  };
};

export default PostsListPage;
