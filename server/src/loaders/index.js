import cors from "cors";
import helmet from "helmet";
import { ApolloServer } from "apollo-server-express";
import { env } from "../config";
import gqlLoader from "../utils/gqlLoader";
import resolvers from "../graphql/resolvers";

const typeDefs = gqlLoader("schema.graphql");

export default {
  init: (app) => {
    app.use(cors());
    app.use(
      helmet({
        contentSecurityPolicy: env.nodeEnv === "production" ? undefined : false,
      }),
    );
  },
  graphqlServer: new ApolloServer({
    typeDefs,
    resolvers,
    context: async (req) => req,
    introspection: true,
    playground: {
      tabs: [
        {
          endpoint: "/graphql",
        },
      ],
    },
  }),
};
