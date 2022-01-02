import { 
    approveExportCart, 
    getCart,
    test 
} from "./db";

export const resolvers = {
    Query: {
        getCart: (_, { accountId }) => getCart(accountId),
        hello: () => test(),
    },
    Mutation: {
        approveExportCart: (_, { accountId, exportApproved }) => approveExportCart(accountId, exportApproved),
    }
};