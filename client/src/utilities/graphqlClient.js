import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const uri = createHttpLink({
  uri: process.env.REACT_APP_API_ENDPOINT,
});

export default new ApolloClient({
  link: uri,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: {
            keyArgs: false,
            merge(existing, incoming) {
              if (!incoming) return existing;
              if (!existing) return incoming;
              return incoming;
            },
          },
        },
      },
    },
  }),
  fetchOptions: {
    mode: "no-cors",
  },
});
