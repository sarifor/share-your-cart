import { 
    approveExportCart, 
    test 
} from "./db";

export const resolvers = {
    Query: {
        approveExportCart: (_, { id, exportApproved }) => approveExportCart(id, exportApproved),
        hello: () => test(),
    },
};