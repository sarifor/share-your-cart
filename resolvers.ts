import { 
    approveExportCart, 
    getCart,
    test 
} from "./db";

export const resolvers = {
    Query: {
        approveExportCart: (_, { id, exportApproved }) => approveExportCart(id, exportApproved),
        getCart: (_, { accountId }) => getCart(accountId),
        hello: () => test(),
    },
};