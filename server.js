import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: (_, hello) => "Hello World!",
    },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Running on localhost:4000"));