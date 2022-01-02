import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";

const typeDefs = "./schema.graphql";

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Running on localhost:4000"));