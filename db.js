const getOrder = (OrderId) => {
    return {id: OrderId, price: 200};
}

const updateOrder = (order) => {
    console.log(`Order ${order.id} updated with price ${order.price}`);
}

module.exports = {
    getOrder,
    updateOrder
}