import { test } from "./db";

export const resolvers = {
    Query: {
        hello: (_, hello: string) => test()
    },
};