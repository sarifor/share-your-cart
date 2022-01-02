import { GraphQLServer } from "graphql-yoga";
import { schema } from "./schema.graphql";

const typeDefs = schema;

const resolvers = {
    Query: {
        hello: (_, hello) => "Hello World!",
    },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Running on localhost:4000"));