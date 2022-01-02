import { approveExportCart, test } from "./db";

export const resolvers = {
    Query: {
        approveExportCart: (_, id: number, exportApproved: boolean) => approveExportCart(id, exportApproved),
        hello: (_, hello: string) => test(),
    },
};