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

export const approveExportCart = (id: number, exportApproved: boolean) => {
    if (exportApproved === true) {
        return true;
    } else {
        return false;
    }
};

export const getCart = (accountId: string) => {
    const cart = carts.filter(cart => cart.accountId === accountId);
    console.log(cart);

    // 객체 배열을 객체로 변경
    const rearrangedCart = {
        id: cart[0].id,
        accountId: cart[0].accountId,
        user: cart[0].user,
        exportApproved: cart[0].exportApproved
    };

    return rearrangedCart;
}

export const test = () => "Hello World!";