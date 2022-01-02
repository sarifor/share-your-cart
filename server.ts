import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";

const typeDefs: string = "./schema.graphql";

const server: GraphQLServer = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Running on localhost:4000"));