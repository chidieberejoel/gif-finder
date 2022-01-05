import express from "express";
import loader from "./loaders";

const app = express();
const { graphqlServer } = loader;

loader.init(app);
graphqlServer.applyMiddleware({ app });

export { app, graphqlServer };
