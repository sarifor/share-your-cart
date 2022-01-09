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

export const approveExportCart = (accountId: string, exportApproved: boolean) => {
    const user = carts.filter(cart => cart.accountId === accountId);

    const rearrangedUser = {
        id: user[0].id,
        accountId: user[0].accountId,
        user: user[0].user,
        items: user[0].items,
        exportApproved: user[0].exportApproved
    };

    // user[0].exportApproved 수정하고, carts에서 해당 유저 삭제하고, 해당 유저 다시 push
    user[0].exportApproved = exportApproved;
    const userDeletedDb = carts.filter(cart => cart.accountId !== accountId);
    userDeletedDb.push(rearrangedUser);

    if (carts !== userDeletedDb) {
        console.log(carts);
        return true;
    } else {
        console.log(carts);        
        return false;
    };
};

export const getCart = (accountId: string) => {
    const cart = carts.filter(cart => cart.accountId === accountId);
    console.log(cart);

    // 객체 배열을 객체로 변경
    const rearrangedCart = {
        id: cart[0].id,
        accountId: cart[0].accountId,
        user: cart[0].user,
        items: cart[0].items,
        exportApproved: cart[0].exportApproved
    };

    return rearrangedCart;
}

export const test = () => "Hello World!";