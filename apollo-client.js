import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/ckxm0nrct4i2l01xp3xzs1x3f/master",
  cache: new InMemoryCache(),
});

export default client;
