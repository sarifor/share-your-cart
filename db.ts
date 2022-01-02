const carts = [
    {
        id: 1,
        accountId: "sailormoon",
        user: "aaa",
        items: [
            {
                name: "Milk",
                price: 300,
            },
            {
                name: "Ice Cream",
                price: 200,
            },            
        ],
        exportApproved: true,
    },
    {
        id: 2,
        accountId: "weddingPeach",
        user: "bbb",
        items: [
            {
                name: "Pasta",
                price: 1000,
            },
            {
                name: "Banana",
                price: 100,
            }
        ],
        exportApproved: true,
    }
];

/* export const approveExportCart = (id: number, exportApproved: boolean) => {
    if (id && exportApproved) {
        return true;
    }
}; */
// export const getCart = () => "Get B's cart";
export const test = () => "Hello World!";